import { supabase } from '@/lib/supabaseClient';

export default async function Home() {
  const { data: menuItems, error } = await supabase
    .from('menu_items')
    .select('*');

  if (error) {
    return <p>Error loading menu: {error.message}</p>;
  }

  return (
    <main>
      <h1>Catering Menu</h1>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price_per_person} per person</p>
          </li>
        ))}
      </ul>
    </main>
  );
}