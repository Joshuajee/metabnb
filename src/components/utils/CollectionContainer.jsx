const CollectionContainer = ({children}) => {
    return (
        <div className={`grid grid-cols-4 gap-4 px-20 my-10`}>
            {children}
        </div>
    );
}
  
export default CollectionContainer;
  