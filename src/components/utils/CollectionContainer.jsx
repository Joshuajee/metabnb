const CollectionContainer = ({children}) => {
    return (
        <div className={`flex justify-center`}>
            <div className="grid grid-cols-4 gap-4 px-20 my-10 max-w-screen-2xl">
                {children}
            </div>
        </div>
    );
}
  
export default CollectionContainer;
  