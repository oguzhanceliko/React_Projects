import CartTotals from "../components/cart/CartTotals"
import Categories from "../components/categories/Categories"
import Header from "../components/header/Header"
import Products from "../components/products/Products"

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="home px-6 flex flex-col md:flex-row justify-between gap-10 dark:bg-slate-600 dark:-mt-[24px] md:pb-0 pb-20">
                <div className="categories  overflow-auto max-h-[calc(100vh_-_112px)] md:pb-4">
                    <Categories />
                </div>
                <div className="products flex-[8] max-h-[calc(100vh_-_112px)]  overflow-auto">
                    <Products />
                </div>
                <div className="cart-totals min-w-[300px] md:-mr-[24px] md:-mt-[24px] dark:mt-0 border-l">
                    <CartTotals />
                </div>
            </div>
        </>
    )
}

export default HomePage