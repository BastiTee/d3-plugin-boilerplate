function privateMethod(a, b) {
    return a + b
}

export default function() {

    function component() {
        // TODO
    }

    component.function = function(a, b) {
        return privateMethod(a, b)
    };

    return component;
}