class HintComponentController {
    constructor(PinService) {
        this.pinService = PinService;
        this.suggestedPin = "";
    }

    $onChange(changes) {
        if (changes.pin && changes.pin.currentValue) {
            this.suggestedPin = this.pinService
                .suggestPin()
                .toString();
        }
    }
}

const HintComponent = {
    template: `<h1>Have You Tried {{$ctrl.suggestedPin}}?`,
    bindings: {
        pin: '<',
    },
    controller: HintComponentController {
    }
}
