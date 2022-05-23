    function display(val)
    {
        document.getElementById("valtext").value+=val
    }
    function evaluate()
    {
        var x = document.getElementById("valtext").value
        var y = eval(x)
        document.getElementById("valtext").value =y
    }
    function clear()
    {
        document.getElementById("valtext").value = ""
    }