export const processFile = (event) => {
    function getBase64 (file) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
            imgFile.src = reader.result
            conFile.classList.add('hasFile')
        }
    }

    const file = event.target.files[0]
    getBase64(file)
}

export const dropHandler = (event) => {
    conFile.classList.remove('drop')
    anime({
        targets: '.img-1',
        left: `200px`,
        top: `200px`,
        duration: 400
    })
    anime({
        targets: '.img-2',
        left: `200px`,
        top: `200px`,
        duration: 600
    })
    anime({
        targets: '.img-3',
        left: `200px`,
        top: `200px`,
        duration: 800
    })
}

export const dragOverHandler = (event) => {
    anime({
        targets: '.img-1',
        left: `${evt.layerX}px`,
        top: `${evt.layerY}px`,
        duration: 200
    })
    anime({
        targets: '.img-2',
        left: `${evt.layerX}px`,
        top: `${evt.layerY}px`,
        duration: 300
    })
    anime({
        targets: '.img-3',
        left: `${evt.layerX}px`,
        top: `${evt.layerY}px`,
        duration: 400
    })
    conFile.classList.add('drop')
    evt.preventDefault();
}

export const dragLeave = (event) => {
    conFile.classList.remove('drop')
    setTimeout(() => {
        anime({
            targets: '.img-1',
            left: `200px`,
            top: `200px`,
            duration: 400,
        })
        anime({
            targets: '.img-2',
            left: `200px`,
            top: `200px`,
            duration: 600,
        })
        anime({
            targets: '.img-3',
            left: `200px`,
            top: `200px`,
            duration: 800,
        })
    }, 50);
} 

export const dragEnter = (event) => {
    conFile.classList.add('drop')
}