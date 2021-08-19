import React from 'react'
import './Main'
import './style.css'

export const Header = () => {
    return (
        <nav className="header">
            <h1 style={{ color: 'white', fontSize: '25px', textAlign: 'center', }}>Covid-19 India Update</h1>
            <h2 className="blink" style={{ color: 'red', textAlign: 'center', fontWeight: '900' }}>🔴 LIVE</h2>
            <select id="state" className="form-select form-select-lg mb-2" aria-label=".form-select-lg example" defaultValue={"0"}>
                <option value="0">Total</option>
                <option value="1">Andaman and Nicobar</option>
                <option value="2">Andhra Pradesh</option>
                <option value="3">Arunachal Pradesh</option>
                <option value="4">Assam</option>
                <option value="5">Bihar</option>
                <option value="6">Chandigarh</option>
                <option value="7">Chhattisgarh</option>
                <option value="8">Daman and Diu</option>
                <option value="9">Delhi</option>
                <option value="10">Goa</option>
                <option value="11">Gujarat</option>
                <option value="12">Haryana</option>
                <option value="13">Himachal Pradesh</option>
                <option value="14">Jammu and Kashmir</option>
                <option value="15">Jharkhand</option>
                <option value="16">Karnataka</option>
                <option value="17">Kerala</option>
                <option value="18">Ladakh</option>
                <option value="19">Lakshadweep</option>
                <option value="20">Madhya Pradesh</option>
                <option value="21">Maharashtra</option>
                <option value="22">Manipur</option>
                <option value="23">Meghalaya</option>
                <option value="24">Mizoram</option>
                <option value="25">Nagaland</option>
                <option value="26">Odisha</option>
                <option value="27">Puducherry</option>
                <option value="28">Punjab</option>
                <option value="29">Rajasthan</option>
                <option value="30">Sikkim</option>
                <option value="32">Tamil Nadu</option>
                <option value="33">Telangana</option>
                <option value="34">Tripura</option>
                <option value="35">Uttar Pradesh</option>
                <option value="36">Uttarakhand</option>
                <option value="37">West Bengal</option>
            </select>
        </nav>
    )
}
