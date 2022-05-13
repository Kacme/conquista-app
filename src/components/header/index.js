import React from "react";

function Header(){

    function handleLogin(){

    }

    function handleSignup(){

    }

    
    return(
        <div class="header">
        <nav>
            <ul>
                <li>
                    <button class="btn" onclick="handleLogin()">signin</button>
                </li>
                <li>
                    <button class="btn" onclick="handleSignup()">signup</button>
                </li>
                <div class="dropdown-content" id="loginDropdown">
                    
                </div>
            </ul>
            
        </nav>
        
    </div>
    );
}

export default Header;