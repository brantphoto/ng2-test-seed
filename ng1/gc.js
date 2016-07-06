class GreetingComponentController {
    constructor() {
        this.greeting = 'Enter PIN';
        this.pinInput = '';
    }

    enter(pin) {
        this.updatePin({
            latestPin: pin
        });
    }
}

export const GreetingComponent = {
    template: `
        <input ng-model="$ctrl.pinInput" placeholder="1111" type="number"/>
        <button ng-click="enter($ctrl.pinInout)">Enter</button>
        <h3>Status: {{greeting}}</h3>
    `,
    bindings: {
        updatePin: '&'
    },
    controller: GreetingComponentController
};


