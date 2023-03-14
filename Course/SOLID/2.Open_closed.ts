// Close to modification
// Si una clase ha sido terminada y testeada, NO debe tocarse más, debe CERRARSE

// Open to extension
// Si es necesario ampliar la funcionalidad de una clase, debe usarse herencia

// Add a logger 
// Inject an HttpClient
// Log error to our server

export class ErrorHandler {
    private messageBox: any;

    constructor(messageBox, httpClient) {
        this.messageBox = messageBox;
    };


    wrapError(err, publicResponse, severity) {
        let error = {
            originalError: err,
            publicResponse,
            severity
        };

        if (severity < 5) {
            this.handleWarning('Warning', publicResponse);
        } else {
            this.handleError('Critical Error', publicResponse);
        }
    };

    private handleWarning(header, content) {
        this.messageBox.show(header, content)
    };

    private handleError(header, content) {
        this.messageBox.show(header, content)
    }

};

export class ErrorLogger {

    private _endpoint: string = 'api/log';

    constructor(private _httpClient) { }

    logError(errorObject): Promise<any> {
        return this._httpClient.post(this._endpoint, errorObject);
    };
};

export class ErrorHandlerWithLoggin extends ErrorHandler {

    private _logger: ErrorLogger;

    constructor(messageBox, httpClient, logger: ErrorLogger) {
        super(messageBox, httpClient);
        this._logger = logger;
    };

    wrapError(err: any, publicResponse: any, severity: any) {
        return this._logger.logError(err).then(() => {
            // invocamos para el método de esta clase, el método padre vía super.method()
            // de esta forma, le damos la misma funcionalidad al método actual
            super.wrapError(err, publicResponse, severity);
        });
    };

};