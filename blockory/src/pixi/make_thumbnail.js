const url = `${process.env.REACT_APP_API_ENDPOINT}/GetDiaryMovie`

video.src = url
video.onpause = () => image.setAttribute('href', toDataURL(video))
video.onseeked = () => image.setAttribute('href', toDataURL(video))
textarea.oninput = () => (g.innerHTML = textarea.value)
body.ondragover = (event) => event.preventDefault()

async function toImage(file, width, height) {
  const img = new Image(width, height)
  img.src = URL.createObjectURL(file)
  await img.decode()

  return img
}

// Draw target image and return source of canvas
function toDataURL(target, type) {
  const canvas = document.createElement('canvas')
  canvas.width = target.width
  canvas.height = target.height
  canvas.getContext('2d').drawImage(target, 0, 0, target.width, target.height)

  return canvas.toDataURL(type)
}

// Method when drop(drag & drop) file (may be unneeded)
body.ondrop = async function (event) {
  event.preventDefault()
  for (const file of event.dataTransfer.files) {
    const img = await toImage(file)
    textarea.value += `\n<image x="0" y="0" width="${img.width}" height="${img.height}" href="${toDataURL(img)}" />\n`
    textarea.oninput()
  }
}

// Convert SVG to JPEG file
async function toJPEG(svg) {
  const file = new Blob([svg.outerHTML], { type: 'image/svg+xml' })
  const img = await toImage(file, svg.width.baseVal.value, svg.height.baseVal.value)

  return toDataURL(img, 'image/jpeg')
}

// Save JPEG to local (may be unneeded)
button.onclick = async function () {
  const a = document.createElement('a')
  a.href = await toJPEG(svg)
  a.download = 'thumbnail.jpg'
  a.click()
}
