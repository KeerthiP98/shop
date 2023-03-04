import './style.css'
import {Link} from "react-router-dom"



const Home =()=>{
    return(
        <>
        <div className='shop'>
        <h1 className="text-center bg-light display-5 p-2"> కిరాణా దుకాణం</h1>
        <div className="text-center p-3 m-3 text-light d-flex flex-column text-center align-items-center
         justify-content-center h-100 ">
        <h2 >మా షాపులో సరుకులు అత్యుత్తమ నాణ్యతతో మరియు హోల్‌సేల్ ధరలో లబించును ఎక్కడో కాదు మన </h2>
        <h2 > చేబ్రోలు మెయిన్‌రోడ్‌లో మన వూర వారి షాప్‌లో మాత్రమే.</h2>
        </div>
        </div>
        <div className='p-3 m-3 '>
            <h1 className="text-center bg-warning text-danger display-5 p-1">చిత్రాలు</h1>

            <div className="card-group p-3 m-3">
            <div className="card img  ">
  <div className="card-body ">
  <img src="https://taazaga.com/wp-content/uploads/2021/02/toor-dal-scaled.jpg" 
className="img-thumbnail img p-3 pl-4 card-img-top" alt="కందిపప్పు"/>
<h5 className="card-title text-center">కందిపప్పు</h5>
</div>
</div>
<div className="card img   ">
  <div className="card-body ">
  <img src="https://cdn.shopify.com/s/files/1/0531/1374/9683/products/51nYh8XoDmL.jpg?v=1611760127" 
  className="img-thumbnail p-3 pl-4 card-img-top  img" alt="మినపగుళ్లు"/>
<h5 className="card-title text-center">మినపగుళ్లు</h5>
</div>
</div>

<div className="card   img">
  <div className="card-body">
<img src="data:image/jpeg;base64,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" 
  className="img-thumbnail  p-3 pl-4 card-img-top img" alt="సెనగపప్పు"/>
<h5 className="card-title text-center">సెనగపప్పు</h5>
</div>
</div>
</div>

<div className="card-group p-3 m-3">
<div className="card img">
  <div className="card-body">
  <img src="https://img1.exportersindia.com/product_images/bc-small/2021/5/8807750/biryani-masala-1621846028-5833279.jpeg"
   className="img-thumbnail p-3 pl-4 card-img-top  img" alt="దినుసులు"/>
<h5 className="card-title text-center">దినుసులు</h5>
</div>
</div>

<div className="card img">
  <div className="card-body">
  <img src="https://media.istockphoto.com/photos/mixed-dry-fruits-picture-id177519691" 
  className="img-thumbnail p-3 pl-4 card-img-top img" alt="బాదం జీడిపప్పు.........."/>
<h5 className="card-title text-center">బాదం,జీడిపప్పు..</h5>
</div>
</div>

<div className="card img">
  <div className="card-body">
  <img src="https://www.organicfacts.net/wp-content/uploads/rice-1.jpg" 
  className="img-thumbnail p-3 pl-4 card-img-top img" alt="బియ్యం"/>
<h5 className="card-title text-center">బియ్యం</h5>
</div>
</div>
</div>


<div className="card-group p-3 m-3">
<div className="card img">
  <div className="card-body">
  <img src="https://i0.wp.com/shivethnicfoods.co.uk/wp-content/uploads/2021/03/AASHIRVAAD-WHOLE-WHEAT-FLOUR-10KG.png?fit=1080%2C1080&ssl=1"
   className="img-thumbnail p-3 pl-4 card-img-top img" alt="గోధుమ పిండి"/>
<h5 className="card-title text-center">గోధుమ పిండి</h5>
</div>
</div>

<div className="card img">
  <div className="card-body">
  <img src="https://5.imimg.com/data5/CY/EV/MY-48537385/bambino-vermicelli-500x500.jpg" 
  className="img-thumbnail p-3 pl-4 card-img-top img" alt="సేమ్యా"/>
<h5 className="card-title text-center">సేమ్యా</h5>
</div>
</div>

<div className="card img">
  <div className="card-body">
  <img src="https://content.hy-vee.com/remote.axd/3f4c2184e060ce99111b-f8c0985c8cb63a71df5cb7fd729edcab.ssl.cf2.rackcdn.com/media/18025/cookingoils-hero.jpg?v=1&mode=crop&width=800&height=640&upscale=false" 
  className="img-thumbnail p-3 pl-4 card-img-top img" alt="నూనెలు"/>
<h5 className="card-title text-center">నూనెలు</h5>
</div>
</div>
</div>
 </div>


<h1 className="text-center bg-secondary text-white display-5 p-3 m-3">కిరాణా సామాగ్రి  </h1>
<div>
<table className="table p-3 m-3">
  <thead>
    <tr>
      <th scope="col">నిత్య  అవసరాలు </th>
      <th scope="col">ఇతర వస్తువులు</th>
      </tr>
  </thead>
  <tbody>
    <tr>
    <td>కందిపప్పు,మీనపగుళ్లు,సెనగపప్పు,పచ్చిపప్పు,ఊపుధ్రావ,ఉప్మా రవ్వలు</td>
    <td>సబ్బులు,బట్టలు సబ్బులు,అంటల్లా సబ్బులు,షాంపూలు,dettol</td>
    </tr>
    <tr>
      <td>ఉల్లిపాయలు,చిన్నువుల్లిపాయలు,అల్లం</td>
      <td>టూత్ పేస్టులు, టంగ్ క్లీనర్లు, బ్రష్లులు</td>
      </tr>
    <tr>
    <td>బెల్లం,పంచదార,పాతికీబెల్లం,బియ్యం,బాస్మతి బియ్యం</td>
<td>కొబ్బరి నూనెలు, ఫెయిర్ అండ్ లవ్లీస్, పౌడర్లు, స్టేఫ్రీలు, సెంట్లు</td>
</tr>
<tr>

<td>జీలకర్ర,మెంతులు,ఇంగువా,ఏడుమిర్చి,ఆవాలు,చింతపండు,అట్టుకులు,మరమారాళ్ళు,డాల్డ...</td>
<td>కొబ్బరికాయలు, కడిళ్లు, కర్పూరం, వత్తులు, అవ్వునెయ్యి, విబూది, అగ్గిపెట్టెలు, కర్జూరం</td>

</tr>
<tr>
<td>దాల్చిన చెక్క,లవంగం,మీరియల్లు,అనస పువ్వు,జపత్రి,మరాటి మొగ్గ,జాజికాయ,యాలుకలు,నువ్వులు,గసగసాలు..,పచ్చపెసలు,పెసరపప్పు</td>
<td>గుల్లబ్జామున్ పొడి, సాంబార్ పొడి, గరం మసాలా, చికెన్ మసాలా, నిమ్మఉప్పు, రుచి ఉప్పు, ఆహార రంగులు, బ్రూ పొడి, హార్లిక్స్ పొడి, బూస్ట్ పొడి, టీ పొడులు</td>

</tr>

<tr>
<td> కారం,పసుపు, ఉప్పు,నూనెలు,నెయ్యి</td>
<td>గంధం,పచ్చకర్పురం,సబ్జ్జ,బ్రల్లి గింజలు,నమ్ము,ముగ్గు,చీపురులు, పుల్లచిపురులు, ప్లాస్టిక్‌ సంచులు, టిఫిన్‌ప్లేట్లు, నీటి గ్లాసులు, బఫీప్లేట్లు, అక్కులు....</td>
</tr>
<tr>

<td>గోధుమపిండి, మైదాపిండి, సెనగపిండి,బియ్యం పిండి</td>
<td>హార్పిక్, ఫినాయిల్,ఫ్లోర్ క్లీనర్,సైబాల్, మెథోప్లస్</td>
</tr>
  </tbody>
</table>
</div>
<div className="sign p-3 m-3 text-center">
  <h1 className="p-3 text-white ">ఇక్కడ క్లిక్ చేయండి</h1>
  <Link type="submit" className="btn btn-primary p-2 m-3" to="/signin">Sign In</Link>

</div>


<div className="p-3 m-3">
  <h1 className="bg-warning text-success p-1 ">Contact Us:</h1>
  <tr>
<td  className="bg-dark text-light p-1">6-34 Main Road,  </td>
</tr>
<tr>
<td  className="bg-dark text-light p-1">Chebrolu,Guntur,</td>
</tr>
<tr>
<td  className="bg-dark text-light p-1">522212</td>
</tr>
<tr>
<td  className="bg-dark text-light p-1">Mobile Number: +918247299870,+919676336832</td>
</tr>
</div>


        </>
    )
}
export default Home;
