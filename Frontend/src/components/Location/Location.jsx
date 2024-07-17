import "../Location/Location.css"
function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.892523583304!2d-3.87536142489977!3d36.749150770576726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72250f10d6ea5f%3A0x7758863eaa3702d3!2zQy4gSHVlcnRvcywgODMsIDI5NzgwIE5lcmphLCBNw6FsYWdhLCDopb_nj63niZk!5e0!3m2!1szh-CN!2sse!4v1719477706269!5m2!1szh-CN!2sse"
      title="google map"
      width="600"
      height="450"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      className="map"
    ></iframe>
  );
}
export default Map;
