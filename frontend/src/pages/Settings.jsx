const Input = ({ defaultValue, placeholder, type = 'text' }) => (
  <input type={type} defaultValue={defaultValue} placeholder={placeholder}
    className="w-full border border-gray-200 rounded px-3 py-2.5 text-xs outline-none focus:border-orange-400" />
);

const Select = ({ children }) => (
  <select className="w-full border border-gray-200 rounded px-3 py-2.5 text-xs outline-none bg-white focus:border-orange-400">
    {children}
  </select>
);

const Label = ({ children }) => <label className="block text-xs text-gray-500 mb-1.5">{children}</label>;
const SaveBtn = ({ text = 'Save Changes' }) => (
  <button className="bg-orange-500 hover:bg-orange-600 text-white border-none px-6 py-2.5 rounded text-xs font-bold uppercase tracking-widest cursor-pointer mt-3">
    {text}
  </button>
);

const AddressForm = ({ title }) => (
  <div className="bg-white rounded-md p-5">
    <div className="text-xs font-bold uppercase tracking-widest border-b border-gray-100 pb-3 mb-4">{title}</div>
    <div className="grid grid-cols-2 gap-3 mb-3">
      <div><Label>First Name</Label><Input defaultValue="Kevin" /></div>
      <div><Label>Last Name</Label><Input defaultValue="Gilbert" /></div>
    </div>
    <div className="mb-3"><Label>Company Name (Optional)</Label><Input /></div>
    <div className="mb-3"><Label>Address</Label><Input defaultValue="Road No. 13/x, House no. 1320/C, Flat No. 5D" /></div>
    <div className="mb-3"><Label>Country</Label><Select><option>Bangladesh</option></Select></div>
    <div className="mb-3"><Label>Region/State</Label><Select><option>Select...</option></Select></div>
    <div className="grid grid-cols-2 gap-3 mb-3">
      <div><Label>City</Label><Select><option>Dhaka</option></Select></div>
      <div><Label>Zip Code</Label><Input defaultValue="1207" /></div>
    </div>
    <div className="mb-3"><Label>Email</Label><Input defaultValue="kevin12345@gmail.com" /></div>
    <div className="mb-3"><Label>Phone Number</Label><Input defaultValue="+1-202-555-0118" /></div>
    <SaveBtn />
  </div>
);

const Settings = () => (
  <div>
    {/* Account Setting */}
    <div className="bg-white rounded-md p-5 mb-4">
      <div className="text-xs font-bold uppercase tracking-widest border-b border-gray-100 pb-3 mb-5">Account Setting</div>
      <div className="flex gap-5 items-start">
        <div className="w-20 h-20 rounded-full bg-[#0d3880] flex items-center justify-center text-white text-3xl flex-shrink-0">
          <i className="fas fa-user"></i>
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div><Label>Display name</Label><Input defaultValue="Kevin" /></div>
            <div><Label>Username</Label><Input placeholder="Display name" /></div>
            <div><Label>Full Name</Label><Input defaultValue="Kevin Gilbert" /></div>
            <div><Label>Email</Label><Input defaultValue="Kevin.gilbert@gmail.com" /></div>
            <div><Label>Secondary Email</Label><Input defaultValue="kevin12345@gmail.com" /></div>
            <div><Label>Phone Number</Label><Input defaultValue="+1-202-555-0118" /></div>
            <div><Label>Country/Region</Label><Select><option>Bangladesh</option></Select></div>
            <div className="flex gap-2">
              <div className="flex-1"><Label>States</Label><Select><option>Dhaka</option></Select></div>
              <div className="w-24"><Label>Zip Code</Label><Input defaultValue="1207" /></div>
            </div>
          </div>
          <SaveBtn />
        </div>
      </div>
    </div>

    {/* Address Forms */}
    <div className="grid grid-cols-2 gap-4 mb-4">
      <AddressForm title="Billing Address" />
      <AddressForm title="Shipping Address" />
    </div>

    {/* Change Password */}
    <div className="bg-white rounded-md p-5">
      <div className="text-xs font-bold uppercase tracking-widest border-b border-gray-100 pb-3 mb-4">Change Password</div>
      {['Current Password', 'New Password', 'Confirm Password'].map((label, i) => (
        <div key={label} className="mb-3 relative">
          <Label>{label}</Label>
          <Input type="password" placeholder={i === 1 ? '8+ characters' : ''} />
          <i className="fas fa-eye absolute right-3 top-8 text-gray-300 text-xs cursor-pointer"></i>
        </div>
      ))}
      <SaveBtn text="Change Passowrd" />
    </div>
  </div>
);
export default Settings;
