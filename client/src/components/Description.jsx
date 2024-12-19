import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Description = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center my-24 p-6 md:px-28"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
                Create AI Images
            </h1>
            <p className="text-gray-500 mb-8">
                Turn your imagination into visuals
            </p>

            <div className="flex flex-col gap-5 md:flex-row md:gap-14 items-center">
                <img
                    src={assets.sample_img_1}
                    alt=""
                    className="w-80 xl:w-96 rounded-lg"
                />
                <div className="">
                    <h2 className="text-3xl font-medium max-w-lg mb-4">
                        Introducing the AI-Powered Text to Image Generator
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Easily bring your ideas to life with our free AI image
                        generator. Whether you need stunning visuals unique
                        imagery, our tool transforms your text into eye-catching
                        images with just a few clicks. Imagine it, describe it,
                        and watch it come to life instantly.
                    </p>
                    <p className="text-gray-600">
                        Simply type in a text prompt, and our cutting-edge AI
                        will generate high-quality images in seconds. from
                        product visuals to character designs ans portraits, and
                        concepts that don't yet exist can be visualised
                        effortlessly. Powered by advanced AI technology, the
                        creative possibilities are limitless!
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default Description;
