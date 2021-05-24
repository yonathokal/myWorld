Bootstrap Tutorial: Landing page – lesson 10
/
by Michal Szymanski
1
// Regular map
2
        function regular_map() {
3
            var var_location = new google.maps.LatLng(40.725118, -73.997699);
4
​
5
            var var_mapoptions = {
6
                center: var_location,
7
                zoom: 14
8
            };
9
​
10
            var var_map = new google.maps.Map(document.getElementById("map-container"),
11
                var_mapoptions);
12
​
13
            var var_marker = new google.maps.Marker({
14
                position: var_location,
15
                map: var_map,
16
                title: "New York"
17
            });
18
        }
19
​
20
        // Initialize maps
21
        google.maps.event.addDomListener(window, 'load', regular_map);
22
​
23
// Carousel options
24
​
25
$('.carousel').carousel({
26
            interval: 3000,
27
        })

Console errors: 0
