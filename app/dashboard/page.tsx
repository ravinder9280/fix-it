"use client";

import LoadingSkeleton from "@/components/loading-skeleton";
import {
	ChatInput,
	ChatInputSubmit,
	ChatInputTextArea,
} from "@/components/ui/chat-input";
import { useState } from "react";
import { toast } from "sonner";

export default  function Page() {
	const [value, setValue] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = () => {
		setIsLoading(true);
		setTimeout(() => {
			toast(value);
			setIsLoading(false);
		}, 1000);
	};

	return (
<LoadingSkeleton/>
	);
}

