import * as d3 from "d3" // You could refine this to certain modules only

// Your plugin's closure
export default function() {
    "use strict";

    // A private variable 
    var color = "#328a60"
    // A private method
    var update = function() {}

    // Plugin implementation operating on the provided selection, 
    // usually an SVG object.
    function pluginImpl(selection) {

        selection.each(function(data) {

            // Next lines are just simple demo code, i.e., this boilerplate
            // would append rectangles to the selection with the dimensions
            // determined by the data provided.

            // Replace the below code with your own initialization 
            // implementation ... 

            var s = d3.select(this)
            s.selectAll(".rect")
                .data(data).enter()
                .append("rect")
                .attr("class", "rect")
                .attr("width", function(d) {
                    return d["width"]
                })
                .attr("height", function(d) {
                    return d["height"]
                })

            // We have reached the update-function... 

            update = function(first) {

                first = first || false
                first // just to trick the linter.

                // add updatable part of charts here. The example sets 
                // the rectangles to the provided color.
                s.selectAll(".rect")
                    .attr("fill", color)
            }
            update(true)

        })
    }

    // A getter/setter best-practise method for private variables
    pluginImpl.color = function(value) {
        if (!arguments.length) return color
        color = value;
        return pluginImpl;
    }

    // A method to invoke the private update method
    pluginImpl.update = function() {
        update()
        return pluginImpl
    }

    return pluginImpl;
}