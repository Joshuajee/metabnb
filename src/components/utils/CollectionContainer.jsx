const CollectionContainer = ({children}) => {
    return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 px-8 sm:px-12 md:px-10 lg:px-8 xl:px-20 max-w-screen-2xl">
                {children}
            </div>
    );
}
  
export default CollectionContainer;
  