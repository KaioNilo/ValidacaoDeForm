import classNames from "classnames";

type Props = {
    type?:  'button' | 'submit' | 'reset',
    variant?: 'default' | 'primary' | 'primaryLight' | 'primaryDark',
    children: React.ReactNode
}

export function Button ({type='button', variant, children}: Props) {    

    let bgColors = 'text-black';

    if ( variant === 'primary' ) {
        bgColors = 'bg-primary text-white hover:bg-primaryLight hover:text-blue-900 active:bg-primaryDark active:text-white transition ease-in duration-200';
    }
    if ( variant === 'primaryLight' ) {
        bgColors = 'bg-primaryLight text-blue-900 hover:bg-primary hover:text-white active:bg-primaryDark active:text-white transition ease-in duration-200';
    }
    if ( variant === 'primaryDark' ) {
        bgColors = 'bg-primaryDark hover:bg-primary text-white active:bg-primaryDark active:text-white transition ease-in duration-200';
    }

    return (
        <button type={type} className={classNames('py-2 px-4 rounded-md', bgColors, 'font-bold')}>
            {children}
        </button>
    );
}