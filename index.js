const DEFAULT_EDGE = 20, DEFAULT_COORDINATE = 50

export default class DragActive {
  constructor(config = {}) {
    if (!config.el) {
      throw new Error('You must set a element, element can be a Sting ID or Element Object')
    }

    this.config = config
    this.el = typeof el === 'string' ? document.querySelector(config.el) : config.el

    if (config.coordinateSave) {
      config.coordinateX = localStorage.getItem('DRAG_ACTIVE_POSITION_X') || config.coordinateX || DEFAULT_COORDINATE
      config.coordinateY = localStorage.getItem('DRAG_ACTIVE_POSITION_Y') || config.coordinateY || DEFAULT_COORDINATE
    }

    this.el.style.position = 'fixed'
    this.el.style.top = 0
    this.el.style.left = 0

    this.el.style.transform = `translate(${config.coordinateX}px,${config.coordinateY}px)`
    this.el.style.webkitTransform = `translate(${config.coordinateX}px,${config.coordinateY}px)`

    let Edge = []
    if (!this.config.offset) {
      Edge.push(DEFAULT_EDGE)
      Edge.push(DEFAULT_EDGE)
      Edge.push(DEFAULT_EDGE)
      Edge.push(DEFAULT_EDGE)
    }

    else if (typeof this.config.offset === 'number' || typeof this.config.offset === 'string') {
      Edge.push(this.config.offset)
      Edge.push(this.config.offset)
      Edge.push(this.config.offset)
      Edge.push(this.config.offset)
    }

    else {
      if (this.config.offset.length === 4) {
        Edge = this.config.offset
      }
      else if (this.config.offset.length === 3) {
        //100, 50, 0
        Edge.push(this.config.offset[0]) // up 1
        Edge.push(this.config.offset[1]) // right 2
        Edge.push(this.config.offset[2]) // bottom 3
        Edge.push(this.config.offset[1]) // left 4
      }

      else if (this.config.offset.length === 2) {
        Edge.push(this.config.offset[0]) // up
        Edge.push(this.config.offset[1]) // right
        Edge.push(this.config.offset[0]) // bottom
        Edge.push(this.config.offset[1]) // left
      }

      else if (this.config.offset.length === 1) {
        Edge.push(this.config.offset[0]) // up
        Edge.push(this.config.offset[0]) // right
        Edge.push(this.config.offset[0]) // bottom
        Edge.push(this.config.offset[0]) // left
      }
    }

    this.config.offset = Edge
  }

  run(callback = {}) {
    this.el.ontouchstart = ev => {
      const {width, height} = this.el.getBoundingClientRect()
      this.elWidth = width
      this.elHeight = height
      this.widthCenter = width / 2
      this.heightCenter = height / 2

      this.moveing = false
      this.el.style.transition = null
      callback.onDragStart && callback.onDragStart(this.el)
    }

    this.el.ontouchmove = ev => {
      event.preventDefault()

      this.moveing = true

      let {pageX, pageY} = ev.targetTouches[0]

      const widthCenter = this.widthCenter,
            heightCenter = this.heightCenter,
            {innerHeight, innerWidth} = window


      pageX = (pageX + widthCenter > innerWidth && (innerWidth - widthCenter)) || (pageX < widthCenter && (widthCenter)) || pageX
      pageY = (pageY + heightCenter > innerHeight && (innerHeight - heightCenter)) || (pageY< heightCenter && (heightCenter)) || pageY


      this.el.style.transform = `translate(${pageX.toFixed() - widthCenter}px,${ pageY.toFixed() - heightCenter}px)`

      this.el.style.webkitTransform = `translate(${pageX.toFixed() - widthCenter}px,${pageY.toFixed() - heightCenter}px)`

      callback && callback.onDragMove(this.el)
    }

    this.el.ontouchend = ev => {
      if (!this.moveing) return

      const {innerHeight, innerWidth} = window, widthCenter = this.widthCenter,
            heightCenter = this.heightCenter, Edge = this.config.offset

      let {pageX, pageY} = ev.changedTouches[0]


      pageX = (pageX + widthCenter > innerWidth && (innerWidth - widthCenter - Edge[1])) || (pageX < widthCenter && (widthCenter + Edge[3])) || pageX
      pageY = (pageY + heightCenter > innerHeight && (innerHeight - heightCenter - Edge[2])) || (pageY < heightCenter && (heightCenter + Edge[0])) || pageY

      pageX = pageX.toFixed()
      pageY = pageY.toFixed()


      let haloX = pageX > innerWidth / 2 ? innerWidth - this.elWidth - Edge[1] : Edge[3], // 正确的
          haloY = (pageY < Edge[0] && (haloX = pageX - widthCenter) && Edge[1] ) || (pageY > innerHeight - Edge[0] && (haloX = pageX - widthCenter) && innerHeight - this.elHeight - Edge[0] ) || pageY - heightCenter;


      this.el.style.transition = 'transform .4s'
      this.el.style.transform = `translate(${haloX}px,${haloY}px)`
      this.el.style.webkitTransform = `translate(${haloX}px,${haloY}px)`

      callback.onDragEnd && callback.onDragEnd(this.el, {coordinateX: haloX, coordinateY: haloY})

      localStorage.setItem('DRAG_ACTIVE_POSITION_X', haloX)
      localStorage.setItem('DRAG_ACTIVE_POSITION_Y', haloY)
    }
  }
}