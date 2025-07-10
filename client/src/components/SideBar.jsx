import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function SideBar() {

    return (
        <div>
            <aside className="bg-gray-200 px-6 space-y-6 dark:text-white dark:bg-gray-700 text-black ">
                <div>
                    <h4 className="font-bold mb-2">Categories </h4>
                    <ul className="space-y-2">
                        <li>Civil Engineering</li>
                        <li>Software Tools</li>
                        <li>BlockChain tidbits</li>
                        <li>Career Tips</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold">Popular Posts</h4>
                    <ul className="">
                        <li>5 ways of making money online</li>
                        <li>Hotest onDemand Ai tools for Automation</li>
                        <li>5 Cheat for Developing faster</li>
                        <li>How to make Youtube videos using veo3</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-2">Newsletter</h4>
                    <Input 
                    type="text"
                    placeholder="your email"
                    className="p-2 w-full text-white rounded"
                    />
                    <Button className="bg-blue-600 px-6 py-1 mt-2 rounded-md">
                        subscribe
                    </Button>
                </div>
            </aside>
        </div>
    )
}