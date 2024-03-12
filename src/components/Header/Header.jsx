import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex items-center justify-between max-w-7xl mx-auto p-4 border-b-2'>
            <h1 className='text-4xl font-bold'>KnowLedge cafe</h1>
             <img src={profile} />

            
        </header>
    );
};

export default Header;