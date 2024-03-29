import {Alert,Linking} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

function mostrarMensajeAlert(mensaje){
        const alerta = Alert.alert("Alerta",mensaje);
        return alerta
}

async function openLinkWithInAppBrowser(link){
        try {
        const url = link
        if (await InAppBrowser.isAvailable()) {
        const result = await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: '#020235',
        preferredControlTintColor: 'white',
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'overFullScreen',
        modalTransitionStyle: 'partialCurl',
        modalEnabled: true,
        // Android Properties
        showTitle: true,
        toolbarColor: '#020235',
        secondaryToolbarColor: 'black',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animation bundled with app).
        animations: {
        startEnter: 'slide_in_right',
        startExit: 'slide_out_left',
        endEnter: 'slide_in_left',
        endExit: 'slide_out_right'
        },
        headers: {
        'my-custom-header': 'my custom header value'
        }
        })
        // Alert.alert(JSON.stringify(result))
        }
        else Linking.openURL(url)
        } catch (error) {
        Alert.alert(error.message)
}
}

export {mostrarMensajeAlert, openLinkWithInAppBrowser}