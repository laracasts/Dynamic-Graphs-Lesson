<!DOCTYPE html>
<html>
    <head>
        <title>Laravel</title>
    </head>
    <body>

        <revenue-graph url="/api/revenue" 
                       range="{{ request('range', 30) }}"
        >
        </revenue-graph>

        <script src="/js/main.js"></script>
    </body>
</html>
