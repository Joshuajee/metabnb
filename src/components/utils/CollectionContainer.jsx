const CollectionContainer = ({children}) => {
    return (
        <div className={`flex justify-center`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 px-8 sm:px-12 md:px-10 lg:px-16 xl:px-20 my-10 max-w-screen-2xl">
                {children}
            </div>
        </div>
    );
}
  
export default CollectionContainer;
  