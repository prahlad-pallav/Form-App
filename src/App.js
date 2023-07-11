import {useState} from 'react';
import './App.css';

function App() {

  const[formData, setFormData] = useState({firstName :"" , lastName:"", email:"",country:"India", street:"", city:"", state:"", zip:"", notification:"", comments:false, candidates:false, offers:false })

  function changeHandler(event){

    const{name, value, checked, type} = event.target;

    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log(formData);
    alert("Form Submitted, check Console:)");
  }


  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline text-center">
      Form
    </h1>
      <form onSubmit={submitHandler}>
      <div className='flex flex-col mx-auto max-w-md'>
      <label className='text-start mt-2 mb-2 font-medium'>First Name</label>
      <input className='border border-sky-500 rounded placeholder:p-2 placeholder:text-sm' type="text" placeholder='Prahlad' name='firstName' onChange={changeHandler} value={formData.firstName}/>
      <label className='text-start mt-2 mb-2 font-medium'>Last Name</label>
      <input className='border border-sky-500 rounded placeholder:p-2 placeholder:text-sm' type="text" placeholder='Pallav' name='lastName' onChange={changeHandler} value={formData.lastName}/>
      <label className='text-start mt-2 mb-2 font-medium'>Email Address</label>
      <input className='border border-sky-500 rounded placeholder:p-2 placeholder:text-sm' type="email" placeholder='prahlad@hotmail.com' name='email' onChange={changeHandler} value={formData.email}/>
      <label className='text-start mt-2 mb-2 font-medium' htmlFor="">Country</label>
      <select className='border border-sky-500 rounded placeholder:p-2 placeholder:text-sm' name='country' id='country' onChange={changeHandler} value={formData.country}>
      <option value="AF">Afghanistan</option>
    <option value="AX">Aland Islands</option>
    <option value="AL">Albania</option>
    <option value="DZ">Algeria</option>
    <option value="AS">American Samoa</option>
    <option value="AD">Andorra</option>
    <option value="AO">Angola</option>
    <option value="AI">Anguilla</option>
    <option value="AQ">Antarctica</option>
    <option value="AG">Antigua and Barbuda</option>
    <option value="AR">Argentina</option>
    <option value="AM">Armenia</option>
    <option value="AW">Aruba</option>
    <option value="AU">Australia</option>
    <option value="AT">Austria</option>
    <option value="AZ">Azerbaijan</option>
    <option value="BS">Bahamas</option>
    <option value="BH">Bahrain</option>
    <option value="BD">Bangladesh</option>
    <option value="BB">Barbados</option>
    <option value="BY">Belarus</option>
    <option value="BE">Belgium</option>
    <option value="BZ">Belize</option>
    <option value="BJ">Benin</option>
    <option value="BM">Bermuda</option>
    <option value="BT">Bhutan</option>
    <option value="BO">Bolivia</option>
    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
    <option value="BA">Bosnia and Herzegovina</option>
    <option value="BW">Botswana</option>
    <option value="BV">Bouvet Island</option>
    <option value="BR">Brazil</option>
    <option value="IO">British Indian Ocean Territory</option>
    <option value="BN">Brunei Darussalam</option>
    <option value="BG">Bulgaria</option>
    <option value="BF">Burkina Faso</option>
    <option value="BI">Burundi</option>
    <option value="KH">Cambodia</option>
    <option value="CM">Cameroon</option>
    <option value="CA">Canada</option>
    <option value="CV">Cape Verde</option>
    <option value="KY">Cayman Islands</option>
    <option value="CF">Central African Republic</option>
    <option value="TD">Chad</option>
    <option value="CL">Chile</option>
    <option value="CN">China</option>
    <option value="CX">Christmas Island</option>
    <option value="CC">Cocos (Keeling) Islands</option>
    <option value="CO">Colombia</option>
    <option value="KM">Comoros</option>
    <option value="CG">Congo</option>
    <option value="CD">Congo, Democratic Republic of the Congo</option>
    <option value="CK">Cook Islands</option>
    <option value="CR">Costa Rica</option>
    <option value="CI">Cote D'Ivoire</option>
    <option value="HR">Croatia</option>
    <option value="CU">Cuba</option>
    <option value="CW">Curacao</option>
    <option value="CY">Cyprus</option>
    <option value="CZ">Czech Republic</option>
    <option value="DK">Denmark</option>
    <option value="DJ">Djibouti</option>
    <option value="DM">Dominica</option>
    <option value="DO">Dominican Republic</option>
    <option value="EC">Ecuador</option>
    <option value="EG">Egypt</option>
    <option value="SV">El Salvador</option>
    <option value="GQ">Equatorial Guinea</option>
    <option value="ER">Eritrea</option>
    <option value="EE">Estonia</option>
    <option value="ET">Ethiopia</option>
    <option value="FK">Falkland Islands (Malvinas)</option>
    <option value="FO">Faroe Islands</option>
    <option value="FJ">Fiji</option>
    <option value="FI">Finland</option>
    <option value="FR">France</option>
    <option value="GF">French Guiana</option>
    <option value="PF">French Polynesia</option>
    <option value="TF">French Southern Territories</option>
    <option value="GA">Gabon</option>
    <option value="GM">Gambia</option>
    <option value="GE">Georgia</option>
    <option value="DE">Germany</option>
    <option value="GH">Ghana</option>
    <option value="GI">Gibraltar</option>
    <option value="GR">Greece</option>
    <option value="GL">Greenland</option>
    <option value="GD">Grenada</option>
    <option value="GP">Guadeloupe</option>
    <option value="GU">Guam</option>
    <option value="GT">Guatemala</option>
    <option value="GG">Guernsey</option>
    <option value="GN">Guinea</option>
    <option value="GW">Guinea-Bissau</option>
    <option value="GY">Guyana</option>
    <option value="HT">Haiti</option>
    <option value="HM">Heard Island and Mcdonald Islands</option>
    <option value="VA">Holy See (Vatican City State)</option>
    <option value="HN">Honduras</option>
    <option value="HK">Hong Kong</option>
    <option value="HU">Hungary</option>
    <option value="IS">Iceland</option>
    <option value="IN">India</option>
    <option value="ID">Indonesia</option>
    <option value="IR">Iran, Islamic Republic of</option>
    <option value="IQ">Iraq</option>
    <option value="IE">Ireland</option>
    <option value="IM">Isle of Man</option>
    <option value="IL">Israel</option>
    <option value="IT">Italy</option>
    <option value="JM">Jamaica</option>
    <option value="JP">Japan</option>
    <option value="JE">Jersey</option>
    <option value="JO">Jordan</option>
    <option value="KZ">Kazakhstan</option>
    <option value="KE">Kenya</option>
    <option value="KI">Kiribati</option>
    <option value="KP">Korea, Democratic People's Republic of</option>
    <option value="KR">Korea, Republic of</option>
    <option value="XK">Kosovo</option>
    <option value="KW">Kuwait</option>
    <option value="KG">Kyrgyzstan</option>
    <option value="LA">Lao People's Democratic Republic</option>
    <option value="LV">Latvia</option>
    <option value="LB">Lebanon</option>
    <option value="LS">Lesotho</option>
    <option value="LR">Liberia</option>
    <option value="LY">Libyan Arab Jamahiriya</option>
    <option value="LI">Liechtenstein</option>
    <option value="LT">Lithuania</option>
    <option value="LU">Luxembourg</option>
    <option value="MO">Macao</option>
    <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
    <option value="MG">Madagascar</option>
    <option value="MW">Malawi</option>
    <option value="MY">Malaysia</option>
    <option value="MV">Maldives</option>
    <option value="ML">Mali</option>
    <option value="MT">Malta</option>
    <option value="MH">Marshall Islands</option>
    <option value="MQ">Martinique</option>
    <option value="MR">Mauritania</option>
    <option value="MU">Mauritius</option>
    <option value="YT">Mayotte</option>
    <option value="MX">Mexico</option>
    <option value="FM">Micronesia, Federated States of</option>
    <option value="MD">Moldova, Republic of</option>
    <option value="MC">Monaco</option>
    <option value="MN">Mongolia</option>
    <option value="ME">Montenegro</option>
    <option value="MS">Montserrat</option>
    <option value="MA">Morocco</option>
    <option value="MZ">Mozambique</option>
    <option value="MM">Myanmar</option>
    <option value="NA">Namibia</option>
    <option value="NR">Nauru</option>
    <option value="NP">Nepal</option>
    <option value="NL">Netherlands</option>
    <option value="AN">Netherlands Antilles</option>
    <option value="NC">New Caledonia</option>
    <option value="NZ">New Zealand</option>
    <option value="NI">Nicaragua</option>
    <option value="NE">Niger</option>
    <option value="NG">Nigeria</option>
    <option value="NU">Niue</option>
    <option value="NF">Norfolk Island</option>
    <option value="MP">Northern Mariana Islands</option>
    <option value="NO">Norway</option>
    <option value="OM">Oman</option>
    <option value="PK">Pakistan</option>
    <option value="PW">Palau</option>
    <option value="PS">Palestinian Territory, Occupied</option>
    <option value="PA">Panama</option>
    <option value="PG">Papua New Guinea</option>
    <option value="PY">Paraguay</option>
    <option value="PE">Peru</option>
    <option value="PH">Philippines</option>
    <option value="PN">Pitcairn</option>
    <option value="PL">Poland</option>
    <option value="PT">Portugal</option>
    <option value="PR">Puerto Rico</option>
    <option value="QA">Qatar</option>
    <option value="RE">Reunion</option>
    <option value="RO">Romania</option>
    <option value="RU">Russian Federation</option>
    <option value="RW">Rwanda</option>
    <option value="BL">Saint Barthelemy</option>
    <option value="SH">Saint Helena</option>
    <option value="KN">Saint Kitts and Nevis</option>
    <option value="LC">Saint Lucia</option>
    <option value="MF">Saint Martin</option>
    <option value="PM">Saint Pierre and Miquelon</option>
    <option value="VC">Saint Vincent and the Grenadines</option>
    <option value="WS">Samoa</option>
    <option value="SM">San Marino</option>
    <option value="ST">Sao Tome and Principe</option>
    <option value="SA">Saudi Arabia</option>
    <option value="SN">Senegal</option>
    <option value="RS">Serbia</option>
    <option value="CS">Serbia and Montenegro</option>
    <option value="SC">Seychelles</option>
    <option value="SL">Sierra Leone</option>
    <option value="SG">Singapore</option>
    <option value="SX">Sint Maarten</option>
    <option value="SK">Slovakia</option>
    <option value="SI">Slovenia</option>
    <option value="SB">Solomon Islands</option>
    <option value="SO">Somalia</option>
    <option value="ZA">South Africa</option>
    <option value="GS">South Georgia and the South Sandwich Islands</option>
    <option value="SS">South Sudan</option>
    <option value="ES">Spain</option>
    <option value="LK">Sri Lanka</option>
    <option value="SD">Sudan</option>
    <option value="SR">Suriname</option>
    <option value="SJ">Svalbard and Jan Mayen</option>
    <option value="SZ">Swaziland</option>
    <option value="SE">Sweden</option>
    <option value="CH">Switzerland</option>
    <option value="SY">Syrian Arab Republic</option>
    <option value="TW">Taiwan, Province of China</option>
    <option value="TJ">Tajikistan</option>
    <option value="TZ">Tanzania, United Republic of</option>
    <option value="TH">Thailand</option>
    <option value="TL">Timor-Leste</option>
    <option value="TG">Togo</option>
    <option value="TK">Tokelau</option>
    <option value="TO">Tonga</option>
    <option value="TT">Trinidad and Tobago</option>
    <option value="TN">Tunisia</option>
    <option value="TR">Turkey</option>
    <option value="TM">Turkmenistan</option>
    <option value="TC">Turks and Caicos Islands</option>
    <option value="TV">Tuvalu</option>
    <option value="UG">Uganda</option>
    <option value="UA">Ukraine</option>
    <option value="AE">United Arab Emirates</option>
    <option value="GB">United Kingdom</option>
    <option value="US">United States</option>
    <option value="UM">United States Minor Outlying Islands</option>
    <option value="UY">Uruguay</option>
    <option value="UZ">Uzbekistan</option>
    <option value="VU">Vanuatu</option>
    <option value="VE">Venezuela</option>
    <option value="VN">Viet Nam</option>
    <option value="VG">Virgin Islands, British</option>
    <option value="VI">Virgin Islands, U.s.</option>
    <option value="WF">Wallis and Futuna</option>
    <option value="EH">Western Sahara</option>
    <option value="YE">Yemen</option>
    <option value="ZM">Zambia</option>
    <option value="ZW">Zimbabwe</option>
      </select>
      <label className='text-start mt-2 mb-2 font-medium'>Street Address</label>
      <input className='border border-sky-500 rounded placeholder:p-2 placeholder:text-sm' type="text" placeholder='NewJersey Street' name='street' onChange={changeHandler} value={formData.street}/>
      <label className='text-start mt-2 mb-2 font-medium'>City</label>
      <input className='border border-sky-500 rounded placeholder:p-2 placeholder:text-sm' type="text" placeholder='New Delhi' name='city' onChange={changeHandler} value={formData.city}/>
      <label className='text-start mt-2 mb-2 font-medium'>State / Province</label>
      <input className='border border-sky-500 rounded placeholder:p-2 placeholder:text-sm' type="text" placeholder='Delhi' name='state' onChange={changeHandler} value={formData.state}/>
      <label className='text-start mt-2 mb-2 font-medium'>ZIP / Postal Code</label>
      <input className='border border-sky-500 rounded placeholder:p-2 placeholder:text-sm' type="text" placeholder='180016' name='zip' onChange={changeHandler} value={formData.zip}/>
      <label className='text-start mt-2 mb-2 font-medium'>By Email</label>
      <div>
      <div className='flex gap-3'>
      <input type="checkbox"  name='comments' id='comments' checked={formData.comments} onClick={changeHandler}/>
      <label className='text-start mt-2 mb-2 font-medium' htmlFor="comments">Comments</label>
      </div>
      <p className='text-gray-400 text-sm text-start indent-7 -mt-2'>Get notified when someones posts a comment on a posting.</p>
      </div>
      <div>
      <div className='flex gap-3'>
      <input type="checkbox"  name='candidates' id='candidates' checked={formData.candidates} onClick={changeHandler}/>
      <label className='text-start mt-2 mb-2 font-medium' htmlFor="candidates">Candidates</label>
      </div>
      <p className='text-gray-400 text-sm text-start indent-7 -mt-2'>Get notified when a candidate applies for a job.</p>
      </div>
      <div>
      <div className='flex gap-3'>
      <input type="checkbox"  name='offers' id='offers' checked={formData.offers} onClick={changeHandler}/>
      <label className='text-start mt-2 mb-2 font-medium' htmlFor="offers">Offers</label>
      </div>
      <p className='text-gray-400 text-sm text-start indent-7 -mt-2'>Get notified when candidate accepts or rejects an offer.</p>
      </div>
      <label className='text-start mt-2 mb-2 font-medium'>Push Notifications</label> 
      <p className='text-gray-400 text-sm text-start -mt-2'>These are delievered via SMS to your mobile number.</p>
      <div className='flex mt-2 gap-3'>
      <input type="radio" name= "notification"  id="Everything" value='Everything' checked={formData.notification === 'Everything'} onChange={changeHandler}/>
      <label  className='text-start font-medium'  htmlFor="Everything">Everything</label>
      </div>
      <div className='flex mt-2 gap-3'>
      <input type="radio" name= "notification"  id="Same-as-email" value='Same-as-email' checked={formData.notification === 'Same-as-email'} onChange={changeHandler}/>
      <label  className='text-start font-medium'  htmlFor="Same-as-email">Same as email</label>
      </div>
      <div className='flex mt-2 gap-3'>
      <input type="radio" name= "notification"  id="No-push-notifications" value='No-push-notifications' checked={formData.notification === 'No-push-notifications'} onChange={changeHandler}/>
      <label  className='text-start font-medium' htmlFor="No-push-notifications">No push notifications</label>
      </div>
      <div>
        <button className='bg-cyan-500 hover:bg-cyan-600  py-1.5 flex mt-2 text-white rounded-sm font-semibold px-2'>Submit</button>
      </div>
      </div>
      </form>
    </div>
  );
}

export default App;
