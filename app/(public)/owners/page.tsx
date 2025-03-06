import OwnerList from "@/components/modules/public/OwnerList";

export const metadata = {
  title: "オーナー紹介",
  description: "登録されているペットシッターのオーナー一覧です。",
};

export default function OwnersPage() {
  return (
    <main className="pt-16">
      <OwnerList />
    </main>
  );
}
