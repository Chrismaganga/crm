import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <h1>LinkedInClone</h1>
        <div className='header__left'>
            <img src='' alt=''/>
            <div className='header__search'>
                <searchIcon/>
                <input type='text'/>
            </div>

        </div>
        <div className='header__rigt'>

        </div>

    </div>
  )
}

export default Header