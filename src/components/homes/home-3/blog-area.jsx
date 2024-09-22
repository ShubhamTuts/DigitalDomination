import blog_data from '@/data/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const BlogArea = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <>
            <div className="tp-blog-area pb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5">
                            <div className="tp-blog-section-box text-center mb-50">
                                <h3 className={`tp-section-title-3 ${theme === 'dark' ? 'dark-text' : ''}`}>
                                    Our Latest <span>Case Studies</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {blog_data.slice(0, 3).map((item, i) => (
                            <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-60">
                                <div className="tp-blog-item">
                                    <div className="tp-blog-thumb fix">
                                        <Link href={`/blog-details/${item.slug}`}>
                                            <Image 
                                                src={item.img} 
                                                alt={item.title} 
                                                width={370} 
                                                height={220} 
                                                layout="responsive" 
                                            />
                                        </Link>
                                    </div>
                                    <div className="tp-blog-meta d-flex align-items-center">
                                        <div className={`tp-blog-category category-color-${item.color}`}>
                                            <span className={theme === 'dark' ? 'dark-text' : ''}>{item.category}</span>
                                        </div>
                                        <div className="tp-blog-date">
                                            <span className={theme === 'dark' ? 'dark-text' : ''}>{item.date}</span>
                                        </div>
                                    </div>
                                    <div className="tp-blog-title-box">
                                        <Link className={`tp-blog-title-sm ${theme === 'dark' ? 'dark-text' : ''}`} href={`/blog-details/${item.slug}`}>
                                            {item.title}
                                        </Link>
                                    </div>
                                    {/* Uncomment if author info is needed */}
                                    {/* <div className="tp-blog-author-info-box d-flex align-items-center">
                                        <div className="tp-blog-avatar">
                                            <Image 
                                                src={item.author_img} 
                                                alt={item.author_name} 
                                                width={40} 
                                                height={40} 
                                            />
                                        </div>
                                        <div className="tp-blog-author-info">
                                            <h5 className={theme === 'dark' ? 'dark-text' : ''}>{item.author_name}</h5>
                                            <span className={theme === 'dark' ? 'dark-text' : ''}>{item.job_title}</span>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .dark-text {
                    color: white;
                }
            `}</style>
        </>
    );
};

export default BlogArea;
