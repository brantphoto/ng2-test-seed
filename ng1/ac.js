class AppComponentController {
    constructor() {
        this.latestPin = '';
    }
}

export const AppComponent = {
    template: `
        <my-fancy-border title="The PIN Machine">
            <my-greeting="$ctrl.updatePin(pin)"></my-greeting>
        </my-fancy-border>
        <my-hint pin="$ctrl.latestPin"></my-hint>
    `,
    controller: AppComponentController
}
