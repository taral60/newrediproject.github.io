function initMap() {

    // Map options
    var options = {
        zoom: 3.7, 
        center: { lat: 56.1304, lng: -106.3468 }
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);




//-------------------------------------------------------------------------------------
    // This section is to have an array for the latitude and longitude of 
    // the project location for this website and right now it's all filler content
    // a seperate devloper or someone else in general will have to either write a 
    // program to collect the info for the lat and lon from the add project page
    // to allow a seamless addidtion of markers and locations on the map and the 
    // list that will also contain all of the projects 

    var markers = [
        {
            coords: {lat: 51.213890, lng: -102.462776},
            content: 
            '<h4 style=" color: red;">Yorkton, SK</h4> <a href="" style="text-decoration: none;"><p>Project Name</p></a>'
        },
        {
            coords: {lat: 45.266666, lng: -71.900002}, 
            content: '<h4 style=" color: red;">Waterville, QC</h4> <a href="" style="text-decoration: none;"><p>Project Name</p></a>'
        },
        {
            coords: {lat: 45.883331, lng: -73.150002},
            content: '<h4 style=" color: red;">Saint-Ours, QC</h4> <a href="" style="text-decoration: none;"><p>Project Name</p></a>'
        },
        {
            coords: {lat: 	45.484531, lng: -73.597023}, 
            content: '<h4 style=" color: red;">Westmount, QC</h4> <a href="" style="text-decoration: none;"><p>Project Name</p></a>'
        },
        {
            coords: {lat: 52.757500, lng: -108.286110}, 
            content: '<h4 style=" color: red;">North Battleford, SK</h4> <a href="" style="text-decoration: none;"><p>Project Name</p></a>'
        },
        {
            coords: {lat: 45.483334, lng: -73.816666}, 
            content: '<h4 style=" color: red;">Dollard-des-Ormeaux, QC</h4> <a href="" style="text-decoration: none;"><p>Project Name</p></a>'
        },
        {
            coords: {lat: 43.116669, lng: -79.199997}, 
            content: '<h4 style=" color: red;">Thorold, ON</h4> <a href="" style="text-decoration: none;"><p>Project Name</p></a>'
        },
        {
            coords: {lat: 43.466667, lng: -80.516670}, 
            content: '<h4 style=" color: red;">Waterloo, ON</h4> <a href="" style="text-decoration: none;"><p>Project Name</p></a>'
        },
        {
            coords: {lat: 49.191944, lng: -98.100555}, 
            content: '<h4 style=" color: red;">Morden, MB</h4> <a href="" style="text-decoration: none;"><p>Project Name</p></a>'
        },
        {
            coords: {lat: 55.743332, lng: -97.855278}, 
            content: '<h4 style=" color: red;">Thompson, MB</h4> <a href="" style="text-decoration: none;"><p>Project Name</p></a>'
        },
        {
            coords: {lat: 49.019917, lng: -122.802612}, 
            content: '<h4 style=" color: red;">White Rock, BC</h4> <a href="" style="text-decoration: none;"><p>Project Name</p></a>'
        },
        {
            coords: {lat: 50.702221, lng: -119.272224}, 
            content: '<h4 style=" color: red;">Salmon Arm, BC</h4> <a href="" style="text-decoration: none;"><p>Project Name</p></a>'
        },
        {
            coords: {lat: 51.049999, lng: -114.066666}, 
            content: '<h4 style=" color: red;">Calgary, AB</h4> <a href="" style="text-decoration: none;"><p>Project Name</p></a>'
        },
    ];

//--------------------------------------------------------------------------------------


    // Loop through markers
    for(var i = 0; i < markers.length; i++){
        // Add marker
        addMarker(markers[i]);
    }

    // Adding the function for placing markers in a more efficiant way than above
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //icon: props.iconImage
        });

        // Check for custom icon incase someone wants to make certain markers have
        // special icons to signify more important projects for example
        if(props.iconImage){
            // Set icon Image
            marker.setIcon('props.iconImage');
        }

        // Check content
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function(){
                infoWindow.open(map, marker)
            }); 
        }
    }

}
