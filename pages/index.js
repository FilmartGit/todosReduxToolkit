import Apps from "@/components/apps";
import { Provider } from "react-redux";
import store from '@/store';
export default function Home() {
  return (
    <Provider store={store}>
      <Apps />
    </Provider>
  );
}