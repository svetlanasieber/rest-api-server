import x from './Footer.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const Footer = () => (
    <footer className={x.footer}>
        <ul>
            <NavigationItem>Going to 1</NavigationItem>
            <NavigationItem>Going to 2</NavigationItem>
            <NavigationItem>Going to 3</NavigationItem>
            <NavigationItem>Going to 4</NavigationItem>
            <NavigationItem>Going to 5</NavigationItem>
            <NavigationItem>Going to 6</NavigationItem>
            <NavigationItem>Going to 7</NavigationItem>
            <NavigationItem>Going to 8</NavigationItem>
            <NavigationItem>Going to 9</NavigationItem>
            <NavigationItem>Going to 10</NavigationItem>
            <NavigationItem>Going to 11</NavigationItem>
            <NavigationItem><img src="blue-origami-bird-flipped.png" alt="Blue origami" /></NavigationItem>
        </ul>
        <p>Software University &copy; 2021</p>
    </footer>
);

export default Footer;