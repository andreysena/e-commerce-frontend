import React, { useState, useRef, useEffect } from 'react';
import 'rbx/index.css';
import styles from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Button, Icon, Modal } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';

import logo from '../../../assets/images/E-compre-logo-sem-fundo.png';
import genericPic from '../../../assets/images/genericPic.png';
import LoginModal from '../LoginModal';
import RegisterModal from '../RegisterModal';

export default function Header(){

    const [ isLoginModalOpen, setIsLoginModalOpen ] = useState(false);
    const [ isRegisterModalOpen, setIsRegisterModalOpen ] = useState(false);
    const [ userData, setUserData ] = useState([]);
    const navbar_menu = useRef();
    const navbar_burger = useRef();

    const removeClasses = () => {
        navbar_burger.current.classList.value = "navbar-burger";
        navbar_menu.current.classList.value = "navbar-menu";
    }

    const logout = async() => {
        window.localStorage.setItem('token', "");
        window.localStorage.setItem('userData', "");
        setUserData([]);
    }

    useEffect(async() => {
        if (window.localStorage.getItem('userData')) {
            await setUserData(JSON.parse(window.localStorage.getItem('userData')));
        }
    }, [isLoginModalOpen, isRegisterModalOpen]);

    return (
        <>
            <Navbar className={styles.navbar}>
                <Navbar.Brand id={styles.navbar_brand}>
                    <Navbar.Item href="#">
                        <Image
                            src={logo}
                            alt="E-Compre's Logo"
                            role="presentation"
                            width="940"
                        />
                    </Navbar.Item>
                    <Navbar.Burger id={styles.burger} ref={navbar_burger}/>
                </Navbar.Brand>
                <Navbar.Menu className={styles.menu} ref={navbar_menu}>
                    <Navbar.Segment align="start">
                        <Link href="/"><Navbar.Item>Home</Navbar.Item></Link>
                        <Link href="/products"><Navbar.Item>Produtos</Navbar.Item></Link>
                        <Link href="/products"><Navbar.Item>Categorias</Navbar.Item></Link>
                        <Link href="/products"><Navbar.Item>Promoções</Navbar.Item></Link>
                        <Navbar.Item dropdown hoverable id={styles.item}>
                            <Navbar.Link id={styles.dropdown_link}>Outros</Navbar.Link>
                            <Navbar.Dropdown id={styles.dropdown} >
                                <Link href="/products"><Navbar.Item>Sobre</Navbar.Item></Link>
                                <Link href="/products"><Navbar.Item>Contato</Navbar.Item></Link>
                                
                                <Navbar.Divider id={styles.divider}/>

                                <Link href="/products"><Navbar.Item>Relatar um problema</Navbar.Item></Link>
                            </Navbar.Dropdown>
                        </Navbar.Item>
                    </Navbar.Segment>
                    <Navbar.Divider/>
                    <Navbar.Segment align="end">
                        <Navbar.Item dropdown hoverable id={styles.item}>
                            <Navbar.Link id={styles.dropdown_link}>
                                <Button id={styles.menu_profile_button} size="medium">
                                    {

                                        userData.length === 0 ?
                                            <Icon>
                                                <FontAwesomeIcon className={styles.icon} icon={faUserCircle} size="lg"/>        
                                            </Icon>                                            
                                        :
                                            <>
                                                <div className={styles.userPhotoContainer}>   
                                                    <Image
                                                        className={styles.userPhoto}
                                                        src={
                                                            userData.foto_de_perfil ? 
                                                                `data:${userData.foto_de_perfil.mimetype};base64,${userData.foto_de_perfil.source}`
                                                            :
                                                                genericPic
                                                        }
                                                        alt="Foto de perfil do usuário"
                                                        layout="responsive"
                                                        width={200}
                                                        height={200}
                                                    />
                                                </div>    
                                                <a id={styles.userName}>{ userData.nome }</a>
                                            </>
                                    }
                                    
                                </Button>
                            </Navbar.Link>
                            <Navbar.Dropdown align="right" id={styles.dropdown}>
                                {
                                    userData.length === 0 ?
                                        <>
                                            <Navbar.Item onClick={() => {removeClasses(); setIsLoginModalOpen(!isLoginModalOpen)}}>Entrar</Navbar.Item>
                                            <Navbar.Item onClick={() => {removeClasses(); setIsRegisterModalOpen(!isRegisterModalOpen)}}>Cadastrar-se</Navbar.Item>
                                        </>
                                    :
                                        <Navbar.Item onClick={() => {removeClasses(); logout()}}>Sair</Navbar.Item>
                                }
                            </Navbar.Dropdown>    
                        </Navbar.Item>
                        <Navbar.Item id={styles.item}>
                            <Button id={styles.menu_button, styles.menu_shopping_cart_button} size="medium">
                                <Icon>
                                    <FontAwesomeIcon className={styles.icon} icon={faShoppingCart} size="lg"/>        
                                </Icon>
                                <div className={styles.toggle_cart_qty}>
                                    <p>
                                        { 
                                            userData && userData.carrinho === undefined ? 
                                                0 
                                            : 
                                                userData.carrinho.length
                                        }
                                    </p>
                                </div>
                            </Button>
                        </Navbar.Item>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Navbar>
            {
                isLoginModalOpen ? 
                    <LoginModal onClose={() => setIsLoginModalOpen(!isLoginModalOpen)} /> 
                : 
                    null
            }
            {
                isRegisterModalOpen ?
                    <RegisterModal onClose={() => setIsRegisterModalOpen(!isRegisterModalOpen)} />
                :
                    null
            }
        </>
    );
}