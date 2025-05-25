import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const VerificationForm = () => {
  const [serialNumber, setSerialNumber] = useState('');
  const [country, setCountry] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [displayedCode, setDisplayedCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  // Generate random verification code
  const generateVerificationCode = () => {
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setDisplayedCode(code);
    return code;
  };

  // Generate code on component mount
  useState(() => {
    generateVerificationCode();
  });

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (verificationCode.toUpperCase() !== displayedCode.toUpperCase()) {
      alert('Invalid verification code. Please try again.');
      generateVerificationCode();
      setVerificationCode('');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate verification process
    setTimeout(() => {
      setIsLoading(false);
      setIsVerified(true);
    }, 2000);
  };

  const handleRefreshCode = () => {
    generateVerificationCode();
    setVerificationCode('');
  };

  if (isVerified) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <div className="bg-gray-800 py-8 px-4 text-center">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">SEARCH</h1>
          <h1 className="text-2xl md:text-3xl font-bold">PRODUCT SN</h1>
        </div>
        
        {/* Content Section */}
        <div className="px-4 py-6 max-w-4xl mx-auto">
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">
            Dear users, you can identify the authenticity of the product by entering the module's serial number.
          </p>
          
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            The product(s) in association with the serial number(s) you inquired about are eligible for Jinko Solar's warranty and after-sales services within the {country} and the sales region this country located. Beyond this area, the warranty and after-sales service will not be available.
          </p>
          
          {/* Product Details */}
          <div className="space-y-1">
            <div className="flex justify-between py-2 border-b border-gray-700 text-sm">
              <span className="text-gray-400">Country Entered</span>
              <span className="text-white">{country}</span>
            </div>
            
            <div className="flex justify-between py-2 border-b border-gray-700 text-sm">
              <span className="text-gray-400">Sales Destination</span>
              <span className="text-white">{country}</span>
            </div>
            
            <div className="flex justify-between py-2 border-b border-gray-700 text-sm">
              <span className="text-gray-400">Importer Name</span>
              <span className="text-white">IRI Traders</span>
            </div>
            
            <div className="flex justify-between py-2 border-b border-gray-700 text-sm">
              <span className="text-gray-400">Production Date</span>
              <span className="text-white">2024-01-27</span>
            </div>
            
            <div className="flex justify-between py-2 border-b border-gray-700 text-sm">
              <span className="text-gray-400">Delivery Date</span>
              <span className="text-white">2024-02-05</span>
            </div>
            
            <div className="flex justify-between py-2 border-b border-gray-700 text-sm">
              <span className="text-gray-400">SN</span>
              <span className="text-white">{serialNumber}</span>
            </div>
            
            <div className="flex justify-between py-2 border-b border-gray-700 text-sm">
              <span className="text-gray-400">Product</span>
              <span className="text-white">JKM585N-72HL4-BDV</span>
            </div>
            
            <div className="flex justify-between py-2 border-b border-gray-700 text-sm">
              <span className="text-gray-400">Level</span>
              <span className="text-white">Class A</span>
            </div>
            
            <div className="flex justify-between py-2 border-b border-gray-700 text-sm">
              <span className="text-gray-400">Result</span>
              <span className="text-white font-semibold">Jinko Product</span>
            </div>
          </div>
          
          {/* Back Button */}
          <div className="mt-8 text-center">
            <Button 
              onClick={() => {
                setIsVerified(false);
                setSerialNumber('');
                setVerificationCode('');
                generateVerificationCode();
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded w-full max-w-xs text-sm"
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <Card className="border-gray-200">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-lg font-semibold">Product Verification</CardTitle>
          <CardDescription className="text-sm text-gray-600">
            Verify the authenticity of your JinkoSolar product by entering the module's serial number.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <Label htmlFor="country" className="text-sm font-medium">Country</Label>
              <Select value={country} onValueChange={setCountry}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="afghanistan">Afghanistan</SelectItem>
                  <SelectItem value="albania">Albania</SelectItem>
                  <SelectItem value="algeria">Algeria</SelectItem>
                  <SelectItem value="andorra">Andorra</SelectItem>
                  <SelectItem value="angola">Angola</SelectItem>
                  <SelectItem value="antigua-and-barbuda">Antigua and Barbuda</SelectItem>
                  <SelectItem value="argentina">Argentina</SelectItem>
                  <SelectItem value="armenia">Armenia</SelectItem>
                  <SelectItem value="australia">Australia</SelectItem>
                  <SelectItem value="austria">Austria</SelectItem>
                  <SelectItem value="azerbaijan">Azerbaijan</SelectItem>
                  <SelectItem value="bahamas">Bahamas</SelectItem>
                  <SelectItem value="bahrain">Bahrain</SelectItem>
                  <SelectItem value="bangladesh">Bangladesh</SelectItem>
                  <SelectItem value="barbados">Barbados</SelectItem>
                  <SelectItem value="belarus">Belarus</SelectItem>
                  <SelectItem value="belgium">Belgium</SelectItem>
                  <SelectItem value="belize">Belize</SelectItem>
                  <SelectItem value="benin">Benin</SelectItem>
                  <SelectItem value="bhutan">Bhutan</SelectItem>
                  <SelectItem value="bolivia">Bolivia</SelectItem>
                  <SelectItem value="bosnia-and-herzegovina">Bosnia and Herzegovina</SelectItem>
                  <SelectItem value="botswana">Botswana</SelectItem>
                  <SelectItem value="brazil">Brazil</SelectItem>
                  <SelectItem value="brunei">Brunei</SelectItem>
                  <SelectItem value="bulgaria">Bulgaria</SelectItem>
                  <SelectItem value="burkina-faso">Burkina Faso</SelectItem>
                  <SelectItem value="burundi">Burundi</SelectItem>
                  <SelectItem value="cabo-verde">Cabo Verde</SelectItem>
                  <SelectItem value="cambodia">Cambodia</SelectItem>
                  <SelectItem value="cameroon">Cameroon</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="central-african-republic">Central African Republic</SelectItem>
                  <SelectItem value="chad">Chad</SelectItem>
                  <SelectItem value="chile">Chile</SelectItem>
                  <SelectItem value="china">China</SelectItem>
                  <SelectItem value="colombia">Colombia</SelectItem>
                  <SelectItem value="comoros">Comoros</SelectItem>
                  <SelectItem value="congo">Congo</SelectItem>
                  <SelectItem value="congo-democratic-republic">Congo, Democratic Republic of the</SelectItem>
                  <SelectItem value="costa-rica">Costa Rica</SelectItem>
                  <SelectItem value="cote-divoire">Côte d'Ivoire</SelectItem>
                  <SelectItem value="croatia">Croatia</SelectItem>
                  <SelectItem value="cuba">Cuba</SelectItem>
                  <SelectItem value="cyprus">Cyprus</SelectItem>
                  <SelectItem value="czech-republic">Czechia</SelectItem>
                  <SelectItem value="denmark">Denmark</SelectItem>
                  <SelectItem value="djibouti">Djibouti</SelectItem>
                  <SelectItem value="dominica">Dominica</SelectItem>
                  <SelectItem value="dominican-republic">Dominican Republic</SelectItem>
                  <SelectItem value="ecuador">Ecuador</SelectItem>
                  <SelectItem value="egypt">Egypt</SelectItem>
                  <SelectItem value="el-salvador">El Salvador</SelectItem>
                  <SelectItem value="equatorial-guinea">Equatorial Guinea</SelectItem>
                  <SelectItem value="eritrea">Eritrea</SelectItem>
                  <SelectItem value="estonia">Estonia</SelectItem>
                  <SelectItem value="eswatini">Eswatini</SelectItem>
                  <SelectItem value="ethiopia">Ethiopia</SelectItem>
                  <SelectItem value="fiji">Fiji</SelectItem>
                  <SelectItem value="finland">Finland</SelectItem>
                  <SelectItem value="france">France</SelectItem>
                  <SelectItem value="gabon">Gabon</SelectItem>
                  <SelectItem value="gambia">Gambia</SelectItem>
                  <SelectItem value="georgia">Georgia</SelectItem>
                  <SelectItem value="germany">Germany</SelectItem>
                  <SelectItem value="ghana">Ghana</SelectItem>
                  <SelectItem value="greece">Greece</SelectItem>
                  <SelectItem value="grenada">Grenada</SelectItem>
                  <SelectItem value="guatemala">Guatemala</SelectItem>
                  <SelectItem value="guinea">Guinea</SelectItem>
                  <SelectItem value="guinea-bissau">Guinea-Bissau</SelectItem>
                  <SelectItem value="guyana">Guyana</SelectItem>
                  <SelectItem value="haiti">Haiti</SelectItem>
                  <SelectItem value="honduras">Honduras</SelectItem>
                  <SelectItem value="hungary">Hungary</SelectItem>
                  <SelectItem value="iceland">Iceland</SelectItem>
                  <SelectItem value="india">India</SelectItem>
                  <SelectItem value="indonesia">Indonesia</SelectItem>
                  <SelectItem value="iran">Iran, Islamic Republic of</SelectItem>
                  <SelectItem value="iraq">Iraq</SelectItem>
                  <SelectItem value="ireland">Ireland</SelectItem>
                  <SelectItem value="israel">Israel</SelectItem>
                  <SelectItem value="italy">Italy</SelectItem>
                  <SelectItem value="jamaica">Jamaica</SelectItem>
                  <SelectItem value="japan">Japan</SelectItem>
                  <SelectItem value="jordan">Jordan</SelectItem>
                  <SelectItem value="kazakhstan">Kazakhstan</SelectItem>
                  <SelectItem value="kenya">Kenya</SelectItem>
                  <SelectItem value="kiribati">Kiribati</SelectItem>
                  <SelectItem value="north-korea">Korea, Democratic People's Republic of</SelectItem>
                  <SelectItem value="south-korea">Korea, Republic of</SelectItem>
                  <SelectItem value="kuwait">Kuwait</SelectItem>
                  <SelectItem value="kyrgyzstan">Kyrgyzstan</SelectItem>
                  <SelectItem value="laos">Lao People's Democratic Republic</SelectItem>
                  <SelectItem value="latvia">Latvia</SelectItem>
                  <SelectItem value="lebanon">Lebanon</SelectItem>
                  <SelectItem value="lesotho">Lesotho</SelectItem>
                  <SelectItem value="liberia">Liberia</SelectItem>
                  <SelectItem value="libya">Libya</SelectItem>
                  <SelectItem value="liechtenstein">Liechtenstein</SelectItem>
                  <SelectItem value="lithuania">Lithuania</SelectItem>
                  <SelectItem value="luxembourg">Luxembourg</SelectItem>
                  <SelectItem value="madagascar">Madagascar</SelectItem>
                  <SelectItem value="malawi">Malawi</SelectItem>
                  <SelectItem value="malaysia">Malaysia</SelectItem>
                  <SelectItem value="maldives">Maldives</SelectItem>
                  <SelectItem value="mali">Mali</SelectItem>
                  <SelectItem value="malta">Malta</SelectItem>
                  <SelectItem value="marshall-islands">Marshall Islands</SelectItem>
                  <SelectItem value="mauritania">Mauritania</SelectItem>
                  <SelectItem value="mauritius">Mauritius</SelectItem>
                  <SelectItem value="mexico">Mexico</SelectItem>
                  <SelectItem value="micronesia">Micronesia, Federated States of</SelectItem>
                  <SelectItem value="moldova">Moldova, Republic of</SelectItem>
                  <SelectItem value="monaco">Monaco</SelectItem>
                  <SelectItem value="mongolia">Mongolia</SelectItem>
                  <SelectItem value="montenegro">Montenegro</SelectItem>
                  <SelectItem value="morocco">Morocco</SelectItem>
                  <SelectItem value="mozambique">Mozambique</SelectItem>
                  <SelectItem value="myanmar">Myanmar</SelectItem>
                  <SelectItem value="namibia">Namibia</SelectItem>
                  <SelectItem value="nauru">Nauru</SelectItem>
                  <SelectItem value="nepal">Nepal</SelectItem>
                  <SelectItem value="netherlands">Netherlands</SelectItem>
                  <SelectItem value="new-zealand">New Zealand</SelectItem>
                  <SelectItem value="nicaragua">Nicaragua</SelectItem>
                  <SelectItem value="niger">Niger</SelectItem>
                  <SelectItem value="nigeria">Nigeria</SelectItem>
                  <SelectItem value="north-macedonia">North Macedonia</SelectItem>
                  <SelectItem value="norway">Norway</SelectItem>
                  <SelectItem value="oman">Oman</SelectItem>
                  <SelectItem value="pakistan">Pakistan</SelectItem>
                  <SelectItem value="palau">Palau</SelectItem>
                  <SelectItem value="palestine">Palestine, State of</SelectItem>
                  <SelectItem value="panama">Panama</SelectItem>
                  <SelectItem value="papua-new-guinea">Papua New Guinea</SelectItem>
                  <SelectItem value="paraguay">Paraguay</SelectItem>
                  <SelectItem value="peru">Peru</SelectItem>
                  <SelectItem value="philippines">Philippines</SelectItem>
                  <SelectItem value="poland">Poland</SelectItem>
                  <SelectItem value="portugal">Portugal</SelectItem>
                  <SelectItem value="qatar">Qatar</SelectItem>
                  <SelectItem value="romania">Romania</SelectItem>
                  <SelectItem value="russia">Russian Federation</SelectItem>
                  <SelectItem value="rwanda">Rwanda</SelectItem>
                  <SelectItem value="saint-kitts-and-nevis">Saint Kitts and Nevis</SelectItem>
                  <SelectItem value="saint-lucia">Saint Lucia</SelectItem>
                  <SelectItem value="saint-vincent-and-the-grenadines">
                    Saint Vincent and the Grenadines
                  </SelectItem>
                  <SelectItem value="samoa">Samoa</SelectItem>
                  <SelectItem value="san-marino">San Marino</SelectItem>
                  <SelectItem value="sao-tome-and-principe">Sao Tome and Principe</SelectItem>
                  <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
                  <SelectItem value="senegal">Senegal</SelectItem>
                  <SelectItem value="serbia">Serbia</SelectItem>
                  <SelectItem value="seychelles">Seychelles</SelectItem>
                  <SelectItem value="sierra-leone">Sierra Leone</SelectItem>
                  <SelectItem value="singapore">Singapore</SelectItem>
                  <SelectItem value="slovakia">Slovakia</SelectItem>
                  <SelectItem value="slovenia">Slovenia</SelectItem>
                  <SelectItem value="solomon-islands">Solomon Islands</SelectItem>
                  <SelectItem value="somalia">Somalia</SelectItem>
                  <SelectItem value="south-africa">South Africa</SelectItem>
                  <SelectItem value="south-sudan">South Sudan</SelectItem>
                  <SelectItem value="spain">Spain</SelectItem>
                  <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                  <SelectItem value="sudan">Sudan</SelectItem>
                  <SelectItem value="suriname">Suriname</SelectItem>
                  <SelectItem value="sweden">Sweden</SelectItem>
                  <SelectItem value="switzerland">Switzerland</SelectItem>
                  <SelectItem value="syria">Syrian Arab Republic</SelectItem>
                  <SelectItem value="tajikistan">Tajikistan</SelectItem>
                  <SelectItem value="tanzania">Tanzania, United Republic of</SelectItem>
                  <SelectItem value="thailand">Thailand</SelectItem>
                  <SelectItem value="timor-leste">Timor-Leste</SelectItem>
                  <SelectItem value="togo">Togo</SelectItem>
                  <SelectItem value="tonga">Tonga</SelectItem>
                  <SelectItem value="trinidad-and-tobago">Trinidad and Tobago</SelectItem>
                  <SelectItem value="tunisia">Tunisia</SelectItem>
                  <SelectItem value="turkey">Turkey</SelectItem>
                  <SelectItem value="turkmenistan">Turkmenistan</SelectItem>
                  <SelectItem value="tuvalu">Tuvalu</SelectItem>
                  <SelectItem value="uganda">Uganda</SelectItem>
                  <SelectItem value="ukraine">Ukraine</SelectItem>
                  <SelectItem value="united-arab-emirates">United Arab Emirates</SelectItem>
                  <SelectItem value="united-kingdom">United Kingdom</SelectItem>
                  <SelectItem value="united-states">United States</SelectItem>
                  <SelectItem value="uruguay">Uruguay</SelectItem>
                  <SelectItem value="uzbekistan">Uzbekistan</SelectItem>
                  <SelectItem value="vanuatu">Vanuatu</SelectItem>
                  <SelectItem value="vatican-city">Holy See</SelectItem>
                  <SelectItem value="venezuela">Venezuela</SelectItem>
                  <SelectItem value="viet-nam">Viet Nam</SelectItem>
                  <SelectItem value="yemen">Yemen</SelectItem>
                  <SelectItem value="zambia">Zambia</SelectItem>
                  <SelectItem value="zimbabwe">Zimbabwe</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="serialNumber" className="text-sm font-medium">Serial Number</Label>
              <Input
                id="serialNumber"
                type="text"
                placeholder="Please scan or enter the SN"
                value={serialNumber}
                onChange={(e) => setSerialNumber(e.target.value)}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="verificationCode" className="text-sm font-medium">Verification Code</Label>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 flex items-center gap-2">
                  <Input
                    id="verificationCode"
                    type="text"
                    placeholder="Enter verification code"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <div className="bg-gray-100 border border-gray-300 px-3 py-2 rounded text-sm font-mono tracking-wider">
                    {displayedCode}
                  </div>
                </div>
                <Button
                  type="button"
                  onClick={handleRefreshCode}
                  variant="outline"
                  size="sm"
                  className="text-xs px-2 py-1"
                >
                  Refresh
                </Button>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6"
              disabled={isLoading || !serialNumber || !country || !verificationCode}
            >
              {isLoading ? 'Verifying...' : 'VERIFY'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
