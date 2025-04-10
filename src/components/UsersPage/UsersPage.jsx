import { useEffect, useState } from "react";
import Search from '../../assets/components/Serach/Search';

export default function UsersPage(){
    const [search, setSearch] = useState('');
    function handleChange(e){
      setSearch(e.target.value);
    }

    const [users, setPosts] = useState([]);
    const [message, setMessage] = useState();
    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        fetch('https://jsonplaceholder.typicode.com/users'), {
            method: 'POST',
            body: formData
        };
        e.target.reset();
        setMessage('Форма отправлена');
    } 
    async function fetchPosts(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        setPosts(users);
    }
    useEffect(()=>{
        fetchPosts();
    }, []);

     const filtredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLocaleLowerCase()));

    return(
        <div className="container">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '600px' ,padding: '15px', border: '1px solid gray', marginBottom: '20px'}}>
                <input style={{border: '1px solid #e5e5e5', padding: '15px', marginBottom: '20px' }} type="text" name="title" placeholder="название поста" />
                <input style={{border: '1px solid #e5e5e5', padding: '15px', width: '100%' }} type="text" name="body" placeholder="текст поста" />
                <button style={{backgroundColor: 'darkblue', padding: '15px', color: 'white'}} type="submit">Отправить форму</button>
                <p style={{color: 'red'}}>{message}</p>
            </form>

            <Search handleChange={handleChange} />

                {
                    filtredUsers.length ?
                    filtredUsers.map(user=> (
                        <>                       
                        <h3>id: {user.id}</h3>
                        <p>name: {user.name}</p>                
                        <p>username: {user.username}</p>
                        <p>email: {user.email}</p>                  
                        </>
                    )) 
                    :
                    <p>По запросу "{search}" ничего не найдено</p>        
                    }
            
          
        </div>
    )
}