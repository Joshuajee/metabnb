const CollectionContainer = ({children}) => {
    return (
        <div className="flex justify-center">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-4 px-8 sm:px-12 md:px-10 lg:px- xl:px-24 max-w-screen-2xl">
                {children}
            </div>
        </div>
    );
}
  
export default CollectionContainer;
  