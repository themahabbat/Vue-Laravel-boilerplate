export const toast = (title, message, type = null, parameters = null) => {

    toaster.settings({
        position: 'bottomCenter',
        timeout: 5000,
        zindex: 999999,
        icon: 'material-icons',
    })

    let defaultSettings = {
        title: title,
        message: message,
        iconText: 'menu'
    }

    const params = Object.assign(defaultSettings, parameters)

    if (type == null) toaster.show(params)
    else toaster[type](params)

}