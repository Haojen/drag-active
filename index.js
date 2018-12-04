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

      const widthCenter = this.widthCenter, heightCenter = this.heightCenter, Edge = this.config.offset || DEFAULT_EDGE

      pageX = (pageX + widthCenter > innerWidth && (innerWidth - widthCenter - Edge)) || (pageX < widthCenter && (widthCenter + Edge)) || pageX
      pageY = (pageY + heightCenter > innerHeight && (innerHeight - heightCenter - Edge)) || (pageY< heightCenter && (heightCenter + Edge)) || pageY

      this.el.style.transform = `
        translate(${pageX.toFixed() - widthCenter}px,${pageY.toFixed() - heightCenter}px) 
      `

      this.el.style.webkitTransform = `
        translate(${pageX.toFixed() - widthCenter}px,${pageY.toFixed() - heightCenter}px) 
      `

      callback && callback.onDragMove(this.el)
    }

    this.el.ontouchend = ev => {
      if (!this.moveing) return

      const {innerHeight, innerWidth} = window, widthCenter = this.widthCenter,
            heightCenter = this.heightCenter, Edge = this.config.offset || DEFAULT_EDGE

      let {pageX, pageY} = ev.changedTouches[0]


      pageX = (pageX + widthCenter > innerWidth && (innerWidth - widthCenter - Edge)) || (pageX < widthCenter && (widthCenter + Edge)) || pageX
      pageY = (pageY + heightCenter > innerHeight && (innerHeight - heightCenter - Edge)) || (pageY < heightCenter && (heightCenter + Edge)) || pageY

      pageX = pageX.toFixed()
      pageY = pageY.toFixed()


      let haloX = pageX > innerWidth / 2 ? innerWidth - this.elWidth - Edge : Edge,
          haloY = (pageY < 50 && (haloX = pageX - widthCenter) && Edge ) || (pageY > innerHeight - 50 && (haloX = pageX - widthCenter) && innerHeight - this.elHeight - Edge ) || pageY - heightCenter;

      this.el.style.transition = 'transform .4s'
      this.el.style.transform = `translate(${haloX}px,${haloY}px)`
      this.el.style.webkitTransform = `translate(${haloX}px,${haloY}px)`
      // cache
      localStorage.setItem('DRAG_ACTIVE_POSITION_X', haloX)
      localStorage.setItem('DRAG_ACTIVE_POSITION_Y', haloY)

      callback.onDragEnd && callback.onDragEnd(this.el, {coordinateX: haloX, coordinateY: haloY})
    }
  }
}