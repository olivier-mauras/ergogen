module.exports = {
  params: {
    class: 'TRACE',
    side: "F",
    start: [0, 0],
    end: [1, 1],
    width: 0.25
  },
  body: p => `
    (segment
      (start ${p.xy(p.param.start[0], p.param.start[1])})
      (end ${p.xy(p.param.end[0], p.param.end[1])})
      (width ${p.param.width})
      (layer "${p.param.side}.Cu")
    )
  `
}