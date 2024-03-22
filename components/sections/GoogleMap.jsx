
function GoogleMap() {
  return (
    <div className="App">
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4134.79847136722!2d77.58249548699244!3d12.930922840283861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1500173b97d3%3A0x4efc04f1bf48c7e8!2sPhurr!5e0!3m2!1sen!2sin!4v1709742591734!5m2!1sen!2sin"
        width='100%'
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
      ></iframe> 
     
    </div>
  );
}

export default GoogleMap;