import x from './NavigationItem.module.css';

const NavigationItem = ({ children, id, isSelected, onClickMe }) => {
    let classes = [x.listItem];
    if (isSelected) classes.push(x.selectedItem);
    return <li className={classes.join(' ')}><a onClick={() => onClickMe(id)} href="#">{children}</a></li>;
};

export default NavigationItem;