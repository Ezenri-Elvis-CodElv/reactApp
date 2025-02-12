import "./SignUp.css"




const SignUp = () => {
    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: '',
    //     password: '',
    //     confirmPassword: '',
    //     agreed: false,
    // //   });
    //   const [error, setError] = useState('');
    //   const [loading, setLoading] = useState(false);
    //   const [success, setSuccess] = useState('');
    
      // Handle input changes (works for both text inputs and checkbox)
    //   const handleChange = (e) => {
    //     const { name, value, type, checked } = e.target;
    //     setFormData((prevData) => ({
    //       ...prevData,
    //       [name]: type === 'checkbox' ? checked : value,
    //     }));
    //   };
    
    //   // Client-side form validation
    //   const validateForm = () => {
        // Check required fields
    //     if (
    //       !formData.firstName ||
    //       !formData.lastName ||
    //       !formData.email ||
    //       !formData.phone ||
    //       !formData.password ||
    //       !formData.confirmPassword
    //     ) {
    //       setError('All fields are required.');
    //       return false;
    //     }
    //     // Check if passwords match
    //     if (formData.password !== formData.confirmPassword) {
    //       setError('Passwords do not match.');
    //       return false;
    //     }
    //     // Check phone number is exactly 11 digits (only numbers)
    //     const phoneRegex = /^\d{11}$/;
    //     if (!phoneRegex.test(formData.phone)) {
    //       setError('Phone number must be exactly 11 digits.');
    //       return false;
    //     }
    //     // Check if terms are agreed
    //     if (!formData.agreed) {
    //       setError('You must agree to the terms and conditions.');
    //       return false;
    //     }
    //     // If everything is valid
    //     return true;
    //   };
    
    //   // Handle form submission
    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError('');
    //     setSuccess('');
    
    //     // Validate the form
    //     if (!validateForm()) {
    //       return;
    //     }
    
    //     setLoading(true);
    
    //     try {
    //       const response = await fetch('https://movie-app-ch5.onrender.com/api/user/log-in', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         // Adjust the payload as needed by your API
    //         body: JSON.stringify({
    //           firstName: formData.firstName,
    //           lastName: formData.lastName,
    //           email: formData.email,
    //           phone: formData.phone,
    //           password: formData.password,
    //         }),
    //       });
    
    //       const data = await response.json();
    
    //       if (!response.ok) {
    //         setError(data.message || 'Something went wrong. Please try again.');
    //       } else {
    //         setSuccess('Signup successful!');
    //         setFormData({
    //           firstName: '',
    //           lastName: '',
    //           email: '',
    //           phone: '',
    //           password: '',
    //           confirmPassword: '',
    //           agreed: false,
    //         });
    //       }
    //     } catch (err) {
    //       setError('An error occurred. Please try again.');
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
    

    
  return (
    <div className="SignUpWrapper">
    <div className="SignUpCover">
        <form className="SignUpForm">
            <h1>SignUp</h1>
            {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
            {success && <p style={{ color: 'green', marginBottom: '1rem' }}>{success}</p>}
            <div onSubmit={handleSubmit}  className="SignUpInputs"> 
                <input type="text" placeholder="First Name" className="SignUpName"/>
                <input type="text" placeholder="Last Name" className="SignUpName" />
            </div>
            <div className="EmailSignUp">
                <input type="text" placeholder="Email Address" className="SignUpEmail"/>
            </div>
            <div className="SignUp">
                <input type="Password" placeholder="Password" className="SignUpPassword"/> 
                <input type="Password" placeholder="Confirm Password" className="SignUpPassword" />
                </div>
                <div className="CheckBox">

                <input type="checkbox" name="Agree to Terms and Condition" value="ti" />
                <p>Agree to Terms and Condition</p>
                </div>
                <div className="SignUpPhone">
                  <label For="phone">
                  <input type="text"
                  id="phone"
                  name="phone"
                  maxLength="11"
                  pattern="\d{11}"
                  inputMode="numeric" 
                  title="Phone Number(Must be 11 Digit)"
                  placeholder="Phone Number(Must be 11 Digit)"/>
                  </label>
                  
                </div>
                <div className="BtnSignUp">
                <button>SignUp</button>
                    
                </div>
            

        </form>
    </div>
    </div>
  )
}

export default SignUp
