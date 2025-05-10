<script>
  function initMap() {
    const location = { lat: -33.870, lng: 151.207 }; // Approx. Liverpool St, Sydney
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: location,
    });

    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "First Marker",
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div>
          <strong>First Marker</strong><br>
          Sydney, Australia, Liverpool street, 66<br>
          <i class="fa fa-phone"></i> 1 (800) 123-45-67<br>
          <i class="fa fa-envelope"></i> mail@example.com
        </div>
      `
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  }
</script>
<script async defer
  src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
</script>
