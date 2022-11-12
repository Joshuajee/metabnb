const Container = ({children}) => {
    return (
        <div className={`px-4 py-4 md:px-12 md:py-6 lg:px-20 lg:py-8 xl:px-24 xl:py-10`}>
            {children}
        </div>
    );
}
  
export default Container;
  