function Profile({img, name, age, gender, email }){
  return(
    <div className='bg-gray-800 w-[400px] p-[50px] border-4 border-gray-900 m-auto mt-5 '>
      <img src={img} width={300} alt="Profile picture" />
      <p className='text-white'>Name: {name} </p>
      <p className='text-white'>Age: {age} </p>
      <p className='text-white'>Gender: {gender} </p>
      <i className='text-white'>Email: {email} </i>
    </div>
  )

}
export default Profile