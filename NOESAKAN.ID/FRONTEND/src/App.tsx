import Home from './pages/home';
/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login';
import Register from './pages/register';
import DetailProduct from './pages/detailProduct';
import Product from './pages/product';
import DetailArticle from './pages/detailarticle';
import Store from './pages/store';
import Discuss from './components/Discuss';
import CreateStore from './pages/createStore';
import RoomDiscuss from './pages/roomDiscuss';
import ArticleList from './pages/article';
import UpdateStore from './pages/updateStore';
import Loading from './components/Loading';

function App() {
  //   const [isLoading, setIsLoading] =useState<boolean>(true)
  //   // const auth =useSelector
  // const navigate = useNavigate()
  // const dispatch =useDispatch()

  // async function AuthCheck(){
  //   try{
  //     setAuthToken(localStorage.token)
  //     const response = await API.get("/auth/check")
  //    dispatch(AUTH_CHECK(response.data.user))

  //     setIsLoading(false)
  //   }catch(err){
  //     dispatch(AUTH_ERROR())
  //     setIsLoading(false)
  //     navigate('/auth/login')

  //   }

  // }
  // useEffect(()=>{
  //   if (localStorage.token){

  //     AuthCheck()
  //   }else{
  //     navigate('/auth/login')
  //     setIsLoading(false)
  //   }
  // },[])
  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/MyStore/:id"
            element={<Store />}
          />
          <Route
            path="/create/store"
            element={<CreateStore />}
          />
          <Route
            path="/store/update/:id"
            element={<UpdateStore />}
          />
          <Route
            path="/"
            element={<Home />}
          />
          {/* <Route
            path="/Store"
            element={<Store />}
          /> */}
          <Route
            path="/ProductDetail/:id"
            element={<DetailProduct />}
          />
          <Route
            path="/auth/login"
            element={!localStorage.token ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/auth/register"
            element={!localStorage.token ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/DiscussGrup"
            element={<Discuss />}
          />
          <Route
            path="/Product"
            element={<Product />}
          />
          <Route
            path="/DetailArticle"
            element={<DetailArticle />}
          />
          <Route
            path="/DiscussGrup"
            element={<ArticleList />}
          />
          <Route
            path="/Product"
            element={<Product />}
          />
          <Route
            path="/DetailArticle"
            element={<DetailArticle />}
          />
          <Route
            path="/Loading"
            element={<Loading />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
