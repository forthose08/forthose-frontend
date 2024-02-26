import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Middlebar() {
  const router = useRouter();
  const [showProfile, setShowProfile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="w-full h-full bg-white">
      <div className="container mx-auto h-full px-4 md:px-10">
        
      </div>
    </div>
  );
}
