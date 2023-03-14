// Debemos buscar segregar/separar nuestras interfaces de la manera más específica.
// Una clase no debe depender de métodos que no necesita implementar => código en desuso.
// Mantener clases e interfaces compactas.


export interface ISmartDevice {
    openApp(path: string): void;
    connectToWiFi(ssid: string, password: string): void;
};

export interface IPhoneDevice {
    call(contact: string): void;
    sendSms(contact: string, content: string): void;
}


export class SmartPhone implements ISmartDevice, IPhoneDevice {
    call(contact: string): void {
        console.log(`Calling ${contact}`);
    }
    sendSms(contact: string, content: string): void {
        console.log(`Sending ${content} to ${contact}`);
    }
    openApp(path: string): void {
        console.log(`Opening app ${path}`);
    }
    connectToWiFi(ssid: string, password: string): void {
        console.log(`Connecting to wifi ${ssid} with password ${password}`);
    }

};


export class Tablet implements ISmartDevice {
    openApp(path: string): void {
        throw new Error("Method not implemented.");
    }
    connectToWiFi(ssid: string, password: string): void {
        throw new Error("Method not implemented.");
    }

};



let smartPhone = new SmartPhone();
smartPhone.call('Felipe');
smartPhone.sendSms('Felipe', 'alo');
smartPhone.openApp('wasap');
smartPhone.connectToWiFi('elWifi', '1234');

let tablet = new Tablet();
tablet.connectToWiFi('wifi_hehe', '21312');
tablet.openApp('stremio');