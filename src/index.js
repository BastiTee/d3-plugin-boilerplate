import * as d3 from "d3" // You could refine this to certain modules only

function privateMethod(a, b) {
    return a + b
}

export default function() {

    var color = "#328a60"

    function pluginImpl(selection) {

        selection.each(function(data) {

            // Next lines are just simple demo code, i.e., this boilerplate
            // would append rectangles to the selection with the dimensions
            // determined by the data provided.

            // Replace it with your implementation ... 

            var s = d3.select(this)
            s.selectAll(".rect")
                .data(data).enter()
                .append("rect")
                .attr("class", ".rect")
                .attr("width", function(d) {
                    return d["width"]
                })
                .attr("height", function(d) {
                    return d["height"]
                })
                .attr("fill", color)

        })

    }

    // A function that returns the enclosed color variable 
    // and the result of a private function.
    pluginImpl.function = function(a, b) {
        return [color, privateMethod(a, b)]
    };

    return pluginImpl;
}